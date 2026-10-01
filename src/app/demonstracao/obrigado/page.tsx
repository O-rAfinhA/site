import type { Metadata } from "next";
import { Calendar, Mail, MonitorPlay, Zap } from "lucide-react";
import ThankYouPage from "../../components/site/ThankYouPage";

export const metadata: Metadata = {
  title: "Obrigado pela solicitação",
  alternates: { canonical: "/demonstracao/obrigado" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <ThankYouPage
      badgeIcon={Zap}
      badgeText="Demonstração Personalizada"
      title="Solicitação recebida!"
      description="Obrigado pelo interesse no SisteQ. Nossa equipe vai entrar em contato em breve para agendar sua demonstração."
      accent="#004BA8"
      accentSoft="rgba(0,75,168,0.1)"
      glow="#60A5FA"
      gradient="linear-gradient(135deg, #004BA8 0%, #0B1F4B 100%)"
      stepsTitle="O que acontece agora"
      steps={[
        {
          icon: Mail,
          title: "Contato da equipe",
          desc: "Um especialista vai falar com você por e-mail ou telefone.",
        },
        {
          icon: Calendar,
          title: "Agendamento",
          desc: "Escolhemos juntos o melhor dia e horário para a sessão de 30 minutos.",
        },
        {
          icon: MonitorPlay,
          title: "Demonstração ao vivo",
          desc: "Mostramos o SisteQ aplicado à realidade da sua empresa.",
        },
      ]}
      primaryCta={{ label: "Conhecer a plataforma", href: "/plataforma" }}
      secondaryCta={{ label: "Voltar para a Home", href: "/" }}
    />
  );
}
