import { HeroPBQPH } from "../components/pbqph/HeroPBQPH";
import { AWSBanner } from "../components/AWSBanner";
import { TechnicalDifferentialPBQPH } from "../components/pbqph/TechnicalDifferentialPBQPH";
import { PainPointsPBQPH } from "../components/pbqph/PainPointsPBQPH";
import { NativeRDOPBQPH } from "../components/pbqph/NativeRDOPBQPH";
import { ModulesPBQPH } from "../components/pbqph/ModulesPBQPH";
import { InstantAudit } from "../components/InstantAudit";
import { MethodPBQPH } from "../components/pbqph/MethodPBQPH";
import { HowItWorksPBQPH } from "../components/pbqph/HowItWorksPBQPH";
import { ResultsPBQPH } from "../components/pbqph/ResultsPBQPH";
import { ForWhomPBQPH } from "../components/pbqph/ForWhomPBQPH";
import { FAQPBQPH } from "../components/pbqph/FAQPBQPH";
import { PillarsPBQPH } from "../components/pbqph/PillarsPBQPH";
import { CTAPBQPH } from "../components/pbqph/CTAPBQPH";

export default function PBQPHPage() {
  return (
    <>
      <HeroPBQPH />
      <AWSBanner />
      <TechnicalDifferentialPBQPH />
      <PainPointsPBQPH />
      <NativeRDOPBQPH />
      <ModulesPBQPH />
      <InstantAudit />
      <MethodPBQPH />
      <HowItWorksPBQPH />
      <ResultsPBQPH />
      <ForWhomPBQPH />
      <FAQPBQPH />
      <PillarsPBQPH />
      <CTAPBQPH />
    </>
  );
}
