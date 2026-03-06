"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

export default function GermanyOverviewPage() {
  const { t } = useLanguage()

  const focusItems = [
    t("germany.focus.item1"),
    t("germany.focus.item2"),
    t("germany.focus.item3"),
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

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("germany.about.title")}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{t("germany.about.desc")}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("germany.focus.title")}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {focusItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* China Partner */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("germany.china.title")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("germany.china.desc")}</p>
              <p className="text-gray-600">{t("germany.china.responsibilities")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
