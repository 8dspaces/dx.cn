"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { Mail, Users, Building2, Heart, ArrowRight } from "lucide-react"

export default function GermanyPage() {
  const { t } = useLanguage()

  const focusItems = [
    t("germany.focus.item1"),
    t("germany.focus.item2"),
    t("germany.focus.item3"),
  ]

  const benefits = [
    t("germany.benefits.item1"),
    t("germany.benefits.item2"),
    t("germany.benefits.item3"),
    t("germany.benefits.item4"),
  ]

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
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("germany.china.title")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("germany.china.desc")}</p>
              <p className="text-gray-600">{t("germany.china.responsibilities")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-16">
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

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("germany.benefits.title")}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("germany.contact.title")}</h2>
              <p className="text-gray-600 mb-6">{t("germany.subtitle")}</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Mail className="h-5 w-5" />
                {t("germany.contact.email")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
