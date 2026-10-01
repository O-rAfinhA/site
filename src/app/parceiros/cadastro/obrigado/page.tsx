import type { Metadata } from "next";
import { GraduationCap, Handshake, Mail, Rocket } from "lucide-react";
import ThankYouPage from "../../../components/site/ThankYouPage";

export const metadata: Metadata = {
  title: "Obrigado pelo cadastro",
  alternates: { canonical: "/parceiros/cadastro/obrigado" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <ThankYouPage
      badgeIcon={Handshake}
      badgeText="Programa de Parcerias"
      title="Cadastro recebido!"
      description="Obrigado pelo interesse em ser parceiro SisteQ. Nossa equipe de parcerias vai analisar seu cadastro e entrar em contato em breve."
      accent="#059669"
      accentSoft="rgba(5,150,105,0.1)"
      glow="#10B981"
      gradient="linear-gradient(135deg, #0B1F4B 0%, #004BA8 100%)"
      stepsTitle="Próximos passos"
      steps={[
        {
          icon: Mail,
          title: "Análise do cadastro",
          desc: "Avaliamos seu perfil e entramos em contato para uma conversa inicial.",
        },
        {
          icon: GraduationCap,
          title: "Treinamento",
          desc: "Você conhece a plataforma a fundo e recebe os materiais de parceria.",
        },
        {
          icon: Rocket,
          title: "Início da parceria",
          desc: "Comece a indicar ou implantar o SisteQ com suporte dedicado.",
        },
      ]}
      primaryCta={{ label: "Conhecer a plataforma", href: "/plataforma" }}
      secondaryCta={{ label: "Voltar para a Home", href: "/" }}
    />
  );
}
