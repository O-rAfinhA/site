import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "O SisteQ atende todos os requisitos da ISO 9001?",
    answer:
      "Sim. A plataforma cobre os requisitos da ISO 9001 com módulos específicos para cada etapa do sistema de gestão: contexto da organização, partes interessadas, liderança e direcionamento estratégico, planejamento (riscos, oportunidades e objetivos), suporte (pessoas, infraestrutura, calibração, comunicação e documentos), operação (processos e fornecedores), avaliação de desempenho (indicadores, auditorias e análise crítica) e melhoria (ações corretivas). Tudo conectado, com rastreabilidade da origem da ação até a evidência da eficácia.",
  },
  {
    question: "Funciona se minha empresa ainda não é certificada?",
    answer:
      "Sim. O SisteQ atende tanto empresas que estão estruturando o sistema para a primeira certificação quanto empresas que já são certificadas e precisam manter a gestão viva no dia a dia. Para empresas em implantação, a plataforma ajuda a organizar a base, registrar evidências desde o início e acompanhar o avanço por área. Para empresas já certificadas, o foco é manter o controle entre auditorias e antecipar pendências. Se você esta implantando, ganha uma metodologia pronta que vai facilitar muito a estruturação que precisa fazer.",
  },
  {
    question: "Posso migrar meus documentos e controles atuais?",
    answer:
      "Sim. Documentos em PDF, Word, Excel e outros formatos podem ser importados e organizados nas estruturas do SisteQ (internos, externos, registros, procedimentos, licenças e certidões). Para volumes grandes ou estruturas complexas, precisamos analisar a melhor forma de te ajudar com menor impacto possível na transição. O onboarding inicial inclui orientação sobre como organizar o que já existe na empresa.",
  },
  {
    question: "A plataforma funciona com a consultoria que já trabalho?",
    answer:
      "Sim. O SisteQ é uma plataforma independente, não está vinculada a uma consultoria específica. Sua consultoria atual pode continuar atendendo sua empresa normalmente, usando o SisteQ como ferramenta de trabalho. Se preferir, sua consultoria pode também aderir ao programa de parceiros do SisteQ, o que traz benefícios para os dois lados, mas isso não é obrigatório.",
  },
  {
    question: "Quanto tempo até minha equipe estar usando de fato?",
    answer:
      "Em até 30 dias após a contratação, sua empresa já deve estar com a base organizada, pendências visíveis no painel e a equipe usando a plataforma na rotina. O onboarding inicial inclui ativação, estruturação mínima, orientação técnica, treinamento padrão e reunião de alinhamento. O ritmo de adoção depende do envolvimento da equipe interna, mas o objetivo é que a gestão esteja funcionando dentro do primeiro mês.",
  },
];

export function FAQISO9001() {
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
              color: "#004BA8",
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
            Dúvidas sobre a ISO 9001 no SisteQ
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
