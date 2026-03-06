"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export default function GermanyProcessPage() {
  const { t } = useLanguage()

  const processSteps = [
    t("germany.process.step1"),
    t("germany.process.step2"),
    t("germany.process.step3"),
    t("germany.process.step4"),
    t("germany.process.step5"),
    t("germany.process.step6"),
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("germany.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("germany.subtitle")}</p>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("germany.process.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700">{step}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
