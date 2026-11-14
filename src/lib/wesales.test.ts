import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { enviarLeadWeSales, montarLeadWeSales, telefoneParaCrm } from './wesales';
import type { Dados } from './contato';

const URL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/X/webhook-trigger/Y';

const demonstracao: Dados = {
  tipo: 'demonstracao', name: ' Maria  da Silva ', email: 'Maria@Empresa.com.br', phone: '(41) 99999-0000',
  company: ' Empresa X ', solution: 'iso9001', message: 'Quero ver o sistema',
};

beforeEach(() => {
  vi.stubEnv('WESALES_WEBHOOK_URL', URL_WEBHOOK);
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('telefoneParaCrm', () => {
  it('celular e fixo com DDD viram +55; com 55 na frente, só ganha o +', () => {
    expect(telefoneParaCrm('(41) 99999-0000')).toBe('+5541999990000');
    expect(telefoneParaCrm('41 3333-4444')).toBe('+554133334444');
    expect(telefoneParaCrm('+55 41 99999-0000')).toBe('+5541999990000');
    expect(telefoneParaCrm('9999')).toBe('9999');
  });
});

describe('montarLeadWeSales', () => {
  // Os nomes dos campos são os mapeados no fluxo do WeSales: não podem mudar sem ajustar lá
  it('demonstração: campos com os nomes do mapeamento e rótulos legíveis', () => {
    const lead = montarLeadWeSales(demonstracao, { pagina: 'https://sisteq.com.br/demonstracao', agora: new Date('2026-11-14T18:00:00Z') });
    expect(lead).toEqual({
      origem: 'Site SisteQ',
      formulario: 'demonstracao',
      formulario_nome: 'Solicitação de demonstração',
      nome: 'Maria  da Silva',
      primeiro_nome: 'Maria',
      sobrenome: 'da Silva',
      email: 'maria@empresa.com.br',
      telefone: '+5541999990000',
      empresa: 'Empresa X',
      mensagem: 'Quero ver o sistema',
      solucao_interesse: 'ISO 9001 — Gestão da Qualidade',
      cargo: '',
      assunto: '',
      tipo_parceria: '',
      experiencia: '',
      clientes_mes: '',
      pagina: 'https://sisteq.com.br/demonstracao',
      enviado_em: '2026-11-14T18:00:00.000Z',
    });
  });

  it('contato e parceiro preenchem os campos de cada formulário', () => {
    const contato = montarLeadWeSales({ tipo: 'contato', name: 'Ana', email: 'a@b.com', phone: '1', company: 'C', position: 'Diretora', interest: 'comercial' });
    expect([contato.formulario_nome, contato.cargo, contato.assunto, contato.sobrenome]).toEqual(['Contato', 'Diretora', 'Informações comerciais', '']);

    const parceiro = montarLeadWeSales({ tipo: 'parceiro', name: 'Beto', email: 'b@c.com', phone: '1', company: 'D', partnerType: 'ambos', experience: 'expert', clientsPerMonth: '10' });
    expect([parceiro.formulario_nome, parceiro.tipo_parceria, parceiro.experiencia, parceiro.clientes_mes]).toEqual(['Cadastro de parceiro', 'Ambos', 'Mais de 5 anos', '10']);
  });
});

describe('enviarLeadWeSales', () => {
  it('envia o lead em JSON para o webhook configurado', async () => {
    const buscar = vi.fn(async () => new Response('{}', { status: 200 }));
    expect(await enviarLeadWeSales(demonstracao, {}, buscar as unknown as typeof fetch)).toBe(true);
    const [url, init] = buscar.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(URL_WEBHOOK);
    expect(init.method).toBe('POST');
    expect(JSON.parse(String(init.body)).email).toBe('maria@empresa.com.br');
  });

  it('sem endereço configurado: não envia e devolve false', async () => {
    vi.stubEnv('WESALES_WEBHOOK_URL', '');
    const buscar = vi.fn();
    expect(await enviarLeadWeSales(demonstracao, {}, buscar as unknown as typeof fetch)).toBe(false);
    expect(buscar).not.toHaveBeenCalled();
  });

  it('WeSales recusando ou fora do ar: devolve false, nunca lança', async () => {
    expect(await enviarLeadWeSales(demonstracao, {}, (async () => new Response('', { status: 500 })) as typeof fetch)).toBe(false);
    expect(await enviarLeadWeSales(demonstracao, {}, (async () => { throw new Error('rede'); }) as typeof fetch)).toBe(false);
  });
});
