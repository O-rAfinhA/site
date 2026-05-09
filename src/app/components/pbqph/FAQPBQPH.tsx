import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "O SisteQ atende aos níveis A e B do SiAC?",
    answer:
      "Sim. A plataforma cobre os requisitos do SiAC tanto para o nível A quanto para o nível B, incluindo gestão da obra, RDO (Diário de Obra), PES (Execução de Serviço, FVS (Verificação de Serviços), controle tecnológico (PCTO), desempenho da edificação (PDE), qualidade da obra (PQO), registro de ocorrências (ROO), gestão de fornecedores, documentos, auditorias e ações corretivas. A estrutura permite operar nas duas modalidades sem trocar de sistema quando a empresa avançar de nível. O SisteQ também atende empresas com certificação integrada ISO 9001 e PBQP-H no mesmo sistema.",
  },
  {
    question: "Funciona para empresas com várias obras simultâneas?",
    answer:
      "Sim. O SisteQ permite gerenciar múltiplas obras em paralelo, cada uma com cronograma físico, equipe, RDOs, PES, FVS, controles tecnológicos e indicadores próprios. O painel consolidado mostra o status de todas as obras ativas em um único lugar, e cada canteiro tem visibilidade do que é específico para sua execução. O Pacote básico de Obras inclui até 5 obras ativas simultâneas.",
  },
  {
    question: "O RDO digital é aceito em auditorias da Caixa Econômica Federal?",
    answer:
      "Sim. O RDO digital do SisteQ atende aos requisitos de rastreabilidade exigidos em auditorias do PBQP-H, incluindo data, responsável, registro de atividades, equipes, fornecedores, ocorrências e evidências fotográficas. O registro digital com identificação de usuário tem validade para fins de auditoria, com a vantagem da consulta imediata e da impossibilidade de extravio.",
  },
  {
    question: "Serve para obras do Minha Casa Minha Vida e licitações públicas?",
    answer:
      "Sim. O PBQP-H é exigência da Caixa Econômica Federal para empresas que atuam no Minha Casa Minha Vida e em diversas licitações públicas. O SisteQ foi construído para atender exatamente esse contexto, com a estrutura completa de evidências auditáveis que esses programas demandam: RDO, PES, FVS, controle tecnológico, qualificação de fornecedores, treinamentos e plano de ação. A manutenção contínua da habilitação fica mais simples e previsível.",
  },
  {
    question: "Como funciona o controle tecnológico de ensaios?",
    answer:
      "O módulo de Controle Tecnológico permite cadastrar o Plano de Controle Tecnológico da Obra (PCTO), registrar ensaios realizados (concreto, aço, agregados, solo e outros materiais), vincular cada ensaio à etapa da obra e ao fornecedor responsável, anexar laudos e resultados, e acompanhar a conformidade técnica ao longo do tempo. Resultados fora do padrão geram não conformidades automaticamente, com plano de ação rastreável.",
  },
];

export function FAQPBQPH() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="mb-4"
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#B45A1C",
              textTransform: "uppercase",
            }}
          >
            Perguntas Frequentes
          </p>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.7rem)",
              fontWeight: 700,
              color: "#0B1F4B",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            Dúvidas sobre o PBQP-H no SisteQ
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748B",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl border p-2" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger
                  className="px-6 py-5 hover:no-underline hover:bg-gray-50 rounded-lg transition-colors"
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#0B1F4B",
                    textAlign: "left",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 pt-0"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
