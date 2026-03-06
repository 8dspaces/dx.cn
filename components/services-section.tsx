"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Languages, Users, FileText, Home } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ServicesSection() {
  const { t } = useLanguage()
  const services = [
    {
      icon: Languages,
      title: t("services.german.title"),
      description: t("services.german.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: t("services.matching.title"),
      description: t("services.matching.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FileText,
      title: t("services.visa.title"),
      description: t("services.visa.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Home,
      title: t("services.settlement.title"),
      description: t("services.settlement.desc"),
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 text-pretty leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
