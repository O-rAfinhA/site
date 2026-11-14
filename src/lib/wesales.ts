/**
 * Envia o lead dos formulários do site para o WeSales CRM.
 *
 * O WeSales recebe pelo gatilho "Webhook de entrada" de um fluxo de trabalho
 * (Automações → "Entrada de Lead — Site"); o endereço fica em
 * WESALES_WEBHOOK_URL, nunca no código — quem tem o endereço cria leads.
 *
 * Os nomes dos campos são os do lead de teste usado para mapear o fluxo no
 * WeSales: mudar um nome aqui quebra o mapeamento lá.
 *
 * Nunca lança: o e-mail interno continua sendo enviado, e o CRM fora do ar não
 * pode fazer o visitante ver "falha ao enviar".
 */
import {
  ASSUNTOS, EXPERIENCIAS, NOME_FORMULARIO, SOLUCOES, TIPOS_PARCERIA, rotulo, type Dados,
} from './contato';

const TIMEOUT_MS = 8000;

/** Telefone brasileiro com DDD (10 ou 11 dígitos) vira +55…; o resto vai como veio. */
export function telefoneParaCrm(telefone: string): string {
  const digitos = telefone.replace(/\D/g, '');
  if (digitos.length === 10 || digitos.length === 11) return `+55${digitos}`;
  if (digitos.length === 12 || digitos.length === 13) return digitos.startsWith('55') ? `+${digitos}` : telefone.trim();
  return telefone.trim();
}

export function montarLeadWeSales(dados: Dados, contexto: { pagina?: string; agora?: Date } = {}) {
  const nome = dados.name.trim();
  const [primeiroNome, ...resto] = nome.split(/\s+/);
  return {
    origem: 'Site SisteQ',
    formulario: dados.tipo,
    formulario_nome: NOME_FORMULARIO[dados.tipo],
    nome,
    primeiro_nome: primeiroNome ?? '',
    sobrenome: resto.join(' '),
    email: dados.email.trim().toLowerCase(),
    telefone: telefoneParaCrm(dados.phone),
    empresa: dados.company.trim(),
    mensagem: dados.message?.trim() ?? '',
    solucao_interesse: dados.tipo === 'demonstracao' ? rotulo(SOLUCOES, dados.solution) : '',
    cargo: dados.tipo === 'contato' ? dados.position?.trim() ?? '' : '',
    assunto: dados.tipo === 'contato' ? rotulo(ASSUNTOS, dados.interest) : '',
    tipo_parceria: dados.tipo === 'parceiro' ? rotulo(TIPOS_PARCERIA, dados.partnerType) : '',
    experiencia: dados.tipo === 'parceiro' ? rotulo(EXPERIENCIAS, dados.experience) : '',
    clientes_mes: dados.tipo === 'parceiro' ? String(dados.clientsPerMonth ?? '').trim() : '',
    pagina: contexto.pagina ?? '',
    enviado_em: (contexto.agora ?? new Date()).toISOString(),
  };
}

/** true = o WeSales aceitou; false = não configurado ou falhou (já registrado no log). */
export async function enviarLeadWeSales(
  dados: Dados,
  contexto: { pagina?: string } = {},
  buscar: typeof fetch = fetch,
): Promise<boolean> {
  const url = process.env.WESALES_WEBHOOK_URL?.trim();
  if (!url) {
    console.warn('[wesales] WESALES_WEBHOOK_URL não configurada; lead enviado só por e-mail', { tipo: dados.tipo });
    return false;
  }
  try {
    const resposta = await buscar(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(montarLeadWeSales(dados, contexto)),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!resposta.ok) {
      console.error('[wesales] WeSales recusou o lead', { status: resposta.status, tipo: dados.tipo });
      return false;
    }
    return true;
  } catch (error) {
    console.error('[wesales] Falha ao enviar o lead ao WeSales', { tipo: dados.tipo, error });
    return false;
  }
}
