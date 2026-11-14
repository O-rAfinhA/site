/**
 * Formulários do site (Contato, Demonstração, Parceiro): tipos e rótulos
 * compartilhados pelo e-mail interno e pelo envio ao CRM (WeSales).
 */

export type TipoFormulario = 'demonstracao' | 'contato' | 'parceiro';

interface DadosBase {
  tipo: TipoFormulario;
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
}

export interface DadosDemonstracao extends DadosBase {
  tipo: 'demonstracao';
  solution: string;
}

export interface DadosContato extends DadosBase {
  tipo: 'contato';
  position?: string;
  interest: string;
}

export interface DadosParceiro extends DadosBase {
  tipo: 'parceiro';
  partnerType: string;
  experience: string;
  clientsPerMonth: string;
}

export type Dados = DadosDemonstracao | DadosContato | DadosParceiro;

export const NOME_FORMULARIO: Record<TipoFormulario, string> = {
  demonstracao: 'Solicitação de demonstração',
  contato: 'Contato',
  parceiro: 'Cadastro de parceiro',
};

export const SOLUCOES: Record<string, string> = {
  iso9001: 'ISO 9001 — Gestão da Qualidade',
  iso14001: 'ISO 14001 — Gestão Ambiental',
  pbqph: 'PBQP-H — Construção Civil',
  multiplas: 'Múltiplas soluções',
  'nao-sei': 'Ainda não sei',
};

export const ASSUNTOS: Record<string, string> = {
  aderencia: 'Ver aderência para minha norma',
  iso9001: 'ISO 9001',
  iso14001: 'ISO 14001',
  pbqph: 'PBQP-H',
  'outras-normas': 'Outras normas',
  demonstracao: 'Solicitar demonstração',
  comercial: 'Informações comerciais',
  suporte: 'Suporte técnico',
  parceria: 'Parceria',
  outro: 'Outro assunto',
};

export const TIPOS_PARCERIA: Record<string, string> = {
  implantador: 'Implantador',
  indicador: 'Indicador',
  ambos: 'Ambos',
};

export const EXPERIENCIAS: Record<string, string> = {
  iniciante: 'Menos de 1 ano',
  intermediario: '1 a 3 anos',
  avancado: '3 a 5 anos',
  expert: 'Mais de 5 anos',
};

export const rotulo = (mapa: Record<string, string>, valor?: string) => (valor ? mapa[valor] ?? valor : '');
