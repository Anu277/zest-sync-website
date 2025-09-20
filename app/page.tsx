import { HeroSection } from "@/components/hero-section"
import { FeatureHighlights } from "@/components/feature-highlights"
import { KeyHighlights } from "@/components/key-highlights"
import { SupportedLanguages } from "@/components/supported-languages"
import { HowItWorks } from "@/components/how-it-works"
import { DemoSection } from "@/components/demo-section"
import { InstallationSection } from "@/components/installation-section"
import { SystemRequirements } from "@/components/system-requirements"
import { CommunitySection } from "@/components/community-section"
import { CreditsSection } from "@/components/credits-section"
import { FutureUpdates } from "@/components/future-updates"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <main className="min-h-screen animated-bg relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeatureHighlights />
        <KeyHighlights />
        <SupportedLanguages />
        <HowItWorks />
        <DemoSection />
        <InstallationSection />
        <SystemRequirements />
        <FutureUpdates />
        <CommunitySection />
        <CreditsSection />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
