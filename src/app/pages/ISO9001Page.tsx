import { Hero } from "../components/Hero";
import { AWSBanner } from "../components/AWSBanner";
import { PainPoints } from "../components/PainPoints";
import { Modules } from "../components/Modules";
import { InstantAudit } from "../components/InstantAudit";
import { Method } from "../components/Method";
import { HowItWorks } from "../components/HowItWorks";
import { Results } from "../components/Results";
import { ForWhom } from "../components/ForWhom";
import { FAQISO9001 } from "../components/FAQISO9001";
import { Pillars } from "../components/Pillars";
import { CTA } from "../components/CTA";

export default function ISO9001Page() {
  return (
    <>
      <Hero />
      <AWSBanner />
      <PainPoints />
      <Modules />
      <InstantAudit />
      <Method />
      <HowItWorks />
      <Results />
      <ForWhom />
      <FAQISO9001 />
      <Pillars />
      <CTA />
    </>
  );
}
