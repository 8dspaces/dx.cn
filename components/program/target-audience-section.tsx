"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { Clock, Scale, Briefcase, TrendingUp } from "lucide-react"

export function TargetAudienceSection() {
  const { t } = useLanguage()

  const audiences = [
    {
      icon: Clock,
      title: t("program.audience.type1.title"),
      description: t("program.audience.type1.desc"),
    },
    {
      icon: Scale,
      title: t("program.audience.type2.title"),
      description: t("program.audience.type2.desc"),
    },
    {
      icon: Briefcase,
      title: t("program.audience.type3.title"),
      description: t("program.audience.type3.desc"),
    },
    {
      icon: TrendingUp,
      title: t("program.audience.type4.title"),
      description: t("program.audience.type4.desc"),
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t("program.audience.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("program.audience.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                    <audience.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
