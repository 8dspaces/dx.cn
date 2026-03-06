"use client"

import { useLanguage } from "@/lib/i18n"
import { PartnersSection } from "@/components/about/partners-section"

export default function AboutPartnersPage() {
  const { t } = useLanguage()
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>
        <PartnersSection />
      </div>
    </section>
  )
}
