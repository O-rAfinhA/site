import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "O SisteQ atende aos requisitos da ISO 14001?",
    answer:
      "Sim. A plataforma cobre os pontos principais da ISO 14001: política e objetivos ambientais, levantamento de aspectos e impactos, controles operacionais, requisitos legais e licenciamento, monitoramento ambiental, preparação e resposta a emergências, auditorias, não conformidades e ações corretivas. Tudo integrado em uma estrutura única de gestão ambiental, dificilmente encontrada no mercado.",
  },
  {
    question: "Como o sistema acompanha requisitos legais ambientais?",
    answer:
      "Os requisitos legais aplicáveis, geralmente são monitorados por outra plataforma especializada em levantamento contínuo da legislação aplicável ao seu negócio. No SisteQ faremos os vínculos para monitoramento do Levantamento de Aspectos e Impactos Ambientais, garantindo que a legislação aplicável não passe por risco de não ser atendida. Seu LAIA no SisteQ te dá total domínio sobre legislação e definição de controles operacionais vinculados a cada lei.",
  },
  {
    question: "Como o SisteQ conecta a gestão ambiental à operação do dia a dia?",
    answer:
      "Aspectos ambientais geram controles operacionais e indicadores, requisitos legais ficam vinculados a processos e atividades, não conformidades ambientais abrem ações com rastreabilidade, e emergências têm preparação e resposta registradas. A gestão ambiental deixa de ser uma camada separada e passa a conversar com a rotina real da empresa, sem controles paralelos.",
  },
  {
    question: "Posso controlar PGRS, licenças e emergências no mesmo sistema?",
    answer:
      "Sim. O SisteQ inclui módulos específicos para Plano de Gerenciamento de Resíduos Sólidos (PGRS) com destinação rastreável, controle de licenças ambientais e certidões com gestão de prazos, e preparação para emergências com simulados, registros de ocorrências e ações de resposta. Tudo dentro da mesma plataforma, sem necessidade de planilhas paralelas.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "Em até 30 dias após a contratação, sua empresa já deve estar com aspectos cadastrados, pendências visíveis e equipe usando a plataforma. O onboarding inicial inclui ativação, estruturação mínima, treinamento e alinhamento técnico. Para empresas com volumes complexos de impactos ambientais, o cronograma é avaliado na proposta de implantação.",
  },
];

export function FAQISO14001() {
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
              color: "#059669",
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
            Dúvidas sobre a ISO 14001 no SisteQ
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
