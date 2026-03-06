"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle2, Shield, HeadphonesIcon } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function WhyChooseSection() {
  const { t } = useLanguage()
  const reasons = [
    {
      icon: Award,
      title: t("why.professional.title"),
      description: t("why.professional.desc"),
    },
    {
      icon: CheckCircle2,
      title: t("why.transparent.title"),
      description: t("why.transparent.desc"),
    },
    {
      icon: Shield,
      title: t("why.reliable.title"),
      description: t("why.reliable.desc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("why.support.title"),
      description: t("why.support.desc"),
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">{t("why.title")}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6 space-y-4">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-sm text-gray-600 text-pretty leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
