"use client"

import { useLanguage } from "@/lib/i18n"
import { DualSystemSection } from "@/components/program/dual-system-section"

export default function ProgramPage() {
  const { t } = useLanguage()
  return (
    <div className="space-y-16 py-16 lg:py-24">
      {/* <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("program.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("program.subtitle")}</p>
        </div>
      </div> */}

      <DualSystemSection />
    </div>
  )
}
