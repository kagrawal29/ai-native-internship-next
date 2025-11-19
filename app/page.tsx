import { ApplySection } from "./components/ApplySection";
import { FaqSection } from "./components/FaqSection";
import { FoundersSection } from "./components/FoundersSection";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { OutcomesSection } from "./components/OutcomesSection";
import { ProgramSection } from "./components/ProgramSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StackSection } from "./components/StackSection";
import { WhoSection } from "./components/WhoSection";
import { WhyNowSection } from "./components/WhyNowSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <HeroSection />
        <ProgramSection />
        <WhyNowSection />
        <JourneySection />
        <OutcomesSection />
        <StackSection />
        <FoundersSection />
        <WhoSection />
        <ApplySection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
