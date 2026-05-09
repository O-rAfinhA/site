import { Hero14001 } from "../components/iso14001/Hero14001";
import { AWSBanner } from "../components/AWSBanner";
import { PainPoints14001 } from "../components/iso14001/PainPoints14001";
import { Modules14001 } from "../components/iso14001/Modules14001";
import { InstantAudit } from "../components/InstantAudit";
import { Method14001 } from "../components/iso14001/Method14001";
import { HowItWorks14001 } from "../components/iso14001/HowItWorks14001";
import { Results14001 } from "../components/iso14001/Results14001";
import { ForWhom14001 } from "../components/iso14001/ForWhom14001";
import { FAQISO14001 } from "../components/iso14001/FAQISO14001";
import { Pillars14001 } from "../components/iso14001/Pillars14001";
import { CTA14001 } from "../components/iso14001/CTA14001";

export default function ISO14001Page() {
  return (
    <>
      <Hero14001 />
      <AWSBanner />
      <PainPoints14001 />
      <Modules14001 />
      <InstantAudit />
      <Method14001 />
      <HowItWorks14001 />
      <Results14001 />
      <ForWhom14001 />
      <FAQISO14001 />
      <Pillars14001 />
      <CTA14001 />
    </>
  );
}
