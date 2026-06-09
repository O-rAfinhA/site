import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const DESTINATARIOS = ['zilli@sisteq.com.br', 'comercial@sisteq.com.br'];

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type TipoFormulario = 'demonstracao' | 'contato' | 'parceiro';

interface DadosBase {
  tipo: TipoFormulario;
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
}

interface DadosDemostracao extends DadosBase {
  tipo: 'demonstracao';
  solution: string;
}

interface DadosContato extends DadosBase {
  tipo: 'contato';
  position?: string;
  interest: string;
}

interface DadosParceiro extends DadosBase {
  tipo: 'parceiro';
  partnerType: string;
  experience: string;
  clientsPerMonth: string;
}

type Dados = DadosDemostracao | DadosContato | DadosParceiro;

function buildSubject(dados: Dados): string {
  switch (dados.tipo) {
    case 'demonstracao':
      return `[SisteQ Site] Solicitação de Demonstração — ${dados.company}`;
    case 'contato':
      return `[SisteQ Site] Contato — ${dados.company}`;
    case 'parceiro':
      return `[SisteQ Site] Cadastro de Parceiro — ${dados.company}`;
  }
}

function buildHtml(dados: Dados): string {
  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:6px 12px;font-weight:600;color:#334155;width:160px;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#0f172a">${value}</td></tr>` : '';

  let linhasEspecificas = '';

  if (dados.tipo === 'demonstracao') {
    const solucoes: Record<string, string> = {
      iso9001: 'ISO 9001 — Gestão da Qualidade',
      iso14001: 'ISO 14001 — Gestão Ambiental',
      pbqph: 'PBQP-H — Construção Civil',
      multiplas: 'Múltiplas soluções',
      'nao-sei': 'Ainda não sei',
    };
    linhasEspecificas = row('Solução de interesse', solucoes[dados.solution] ?? dados.solution);
  }

  if (dados.tipo === 'contato') {
    const assuntos: Record<string, string> = {
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
    linhasEspecificas =
      row('Cargo', dados.position ?? '') +
      row('Assunto', assuntos[dados.interest] ?? dados.interest);
  }

  if (dados.tipo === 'parceiro') {
    const tiposParceria: Record<string, string> = {
      implantador: 'Implantador',
      indicador: 'Indicador',
      ambos: 'Ambos',
    };
    const experiencias: Record<string, string> = {
      iniciante: 'Menos de 1 ano',
      intermediario: '1 a 3 anos',
      avancado: '3 a 5 anos',
      expert: 'Mais de 5 anos',
    };
    linhasEspecificas =
      row('Tipo de parceria', tiposParceria[dados.partnerType] ?? dados.partnerType) +
      row('Experiência', experiencias[dados.experience] ?? dados.experience) +
      row('Clientes/mês', dados.clientsPerMonth);
  }

  const titulos: Record<TipoFormulario, string> = {
    demonstracao: '📅 Nova Solicitação de Demonstração',
    contato: '💬 Novo Contato via Site',
    parceiro: '🤝 Novo Cadastro de Parceiro',
  };

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:Inter,Arial,sans-serif;background:#f8fafc;margin:0;padding:32px">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
    <div style="background:#004BA8;padding:24px 32px">
      <p style="color:#fff;font-size:20px;font-weight:700;margin:0">${titulos[dados.tipo]}</p>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0">Site SisteQ · ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${row('Nome', dados.name)}
        ${row('E-mail', dados.email)}
        ${row('Telefone', dados.phone)}
        ${row('Empresa', dados.company)}
        ${linhasEspecificas}
      </table>
      ${dados.message ? `
      <div style="margin-top:20px;padding:16px;background:#f1f5f9;border-radius:8px;border-left:3px solid #004BA8">
        <p style="font-size:12px;font-weight:600;color:#64748b;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.05em">Mensagem</p>
        <p style="font-size:14px;color:#0f172a;margin:0;line-height:1.6">${dados.message.replace(/\n/g, '<br/>')}</p>
      </div>` : ''}
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e2e8f0">
        <p style="font-size:12px;color:#94a3b8;margin:0">Responda diretamente para <strong>${dados.email}</strong></p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const dados: Dados = await req.json();

    if (!dados.name || !dados.email || !dados.phone || !dados.company) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    await transporter.sendMail({
      from: '"SisteQ Site" <rafael@sisteq.com.br>',
      to: DESTINATARIOS,
      replyTo: dados.email,
      subject: buildSubject(dados),
      html: buildHtml(dados),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[API /contato] Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Falha ao enviar mensagem' }, { status: 500 });
  }
}
