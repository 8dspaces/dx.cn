"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { Network, Globe2, Users } from "lucide-react"
import Image from "next/image"

export function ChinaAdvantagesSection() {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Network,
      title: t("home.china.domestic.title"),
      description: t("home.china.domestic.desc"),
      image: "/中国医护培训.jpg",
    },
    {
      icon: Globe2,
      title: t("home.china.germany.title"),
      description: t("home.china.germany.desc"),
      image: "/德国医院.jpg",
    },
    {
      icon: Users,
      title: t("home.china.longterm.title"),
      description: t("home.china.longterm.desc"),
      image: "/咨询图片.jpg",
    },
  ]

  return (
    <section id="advantages" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("home.china.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("home.china.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-amber-50">
                <Image
                  src={advantage.image}
                  alt={advantage.title}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <advantage.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
