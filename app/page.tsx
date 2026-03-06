"use client"

import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CTASection } from "@/components/cta-section"
import { ChinaAdvantagesSection } from "@/components/home/china-advantages-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChinaAdvantagesSection />
      <ProcessSection />
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </>
  )
}
