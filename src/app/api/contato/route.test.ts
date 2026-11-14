import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { sendMail, enviarLeadWeSales } = vi.hoisted(() => ({
  sendMail: vi.fn(),
  enviarLeadWeSales: vi.fn(),
}));
vi.mock('nodemailer', () => ({ default: { createTransport: () => ({ sendMail }) } }));
vi.mock('@/lib/wesales', () => ({ enviarLeadWeSales }));

import { POST } from './route';

const corpo = { tipo: 'contato', name: 'Ana', email: 'ana@x.com', phone: '41999990000', company: 'X', interest: 'comercial' };
const enviar = (dados: unknown) =>
  POST(new Request('https://sisteq.com.br/api/contato', {
    method: 'POST',
    headers: { 'content-type': 'application/json', referer: 'https://sisteq.com.br/contato' },
    body: JSON.stringify(dados),
  }) as never);

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  sendMail.mockResolvedValue({});
  enviarLeadWeSales.mockResolvedValue(true);
});
afterEach(() => {
  vi.clearAllMocks();
  vi.restoreAllMocks();
});

describe('POST /api/contato', () => {
  it('envia o e-mail interno e o lead ao WeSales, com a página de origem', async () => {
    const res = await enviar(corpo);
    expect(res.status).toBe(200);
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ replyTo: 'ana@x.com' }));
    expect(enviarLeadWeSales).toHaveBeenCalledWith(expect.objectContaining({ email: 'ana@x.com' }), { pagina: 'https://sisteq.com.br/contato' });
  });

  it('e-mail falhou mas o CRM recebeu: o visitante não vê erro', async () => {
    sendMail.mockRejectedValue(new Error('smtp fora'));
    expect((await enviar(corpo)).status).toBe(200);
  });

  it('CRM falhou mas o e-mail saiu: o visitante não vê erro', async () => {
    enviarLeadWeSales.mockResolvedValue(false);
    expect((await enviar(corpo)).status).toBe(200);
  });

  it('os dois falharam: 500, para o formulário mostrar o erro', async () => {
    sendMail.mockRejectedValue(new Error('smtp fora'));
    enviarLeadWeSales.mockResolvedValue(false);
    expect((await enviar(corpo)).status).toBe(500);
  });

  it('faltando campo obrigatório ou tipo desconhecido: 400, sem enviar nada', async () => {
    expect((await enviar({ ...corpo, email: '' })).status).toBe(400);
    expect((await enviar({ ...corpo, tipo: 'outro' })).status).toBe(400);
    expect(sendMail).not.toHaveBeenCalled();
    expect(enviarLeadWeSales).not.toHaveBeenCalled();
  });
});
