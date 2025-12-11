import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { PftfHeroSection } from "./components/pftf-home/PftfHeroSection";
import { WhyPftfSection } from "./components/pftf-home/WhyPftfSection";
import { WhatIsPftfSection } from "./components/pftf-home/WhatIsPftfSection";
import { PrinciplesSection } from "./components/pftf-home/PrinciplesSection";
import { PftfProgramsSection } from "./components/pftf-home/PftfProgramsSection";
import { ExperienceSection } from "./components/pftf-home/ExperienceSection";
import { TargetAudienceSection } from "./components/pftf-home/TargetAudienceSection";
import { PftfCtaSection } from "./components/pftf-home/PftfCtaSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <PftfHeroSection />
        <WhyPftfSection />
        <WhatIsPftfSection />
        <PrinciplesSection />
        <PftfProgramsSection />
        <ExperienceSection />
        <TargetAudienceSection />
        <PftfCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
