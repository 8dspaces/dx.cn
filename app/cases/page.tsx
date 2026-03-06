"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { Calendar, GraduationCap, Quote } from "lucide-react"
import Image from "next/image"

export default function CasesPage() {
  const { t } = useLanguage()

  const cases = [
    {
      name: t("cases.case1.name"),
      age: t("cases.case1.age"),
      edu: t("cases.case1.edu"),
      status: t("cases.case1.status"),
      path: t("cases.case1.path"),
      quote: t("cases.case1.quote"),
      image: "/mock/case-student1.svg",
    },
    {
      name: t("cases.case2.name"),
      age: t("cases.case2.age"),
      edu: t("cases.case2.edu"),
      status: t("cases.case2.status"),
      path: t("cases.case2.path"),
      quote: t("cases.case2.quote"),
      image: "/mock/case-student2.svg",
    },
    {
      name: t("cases.case3.name"),
      age: t("cases.case3.age"),
      edu: t("cases.case3.edu"),
      status: t("cases.case3.status"),
      path: t("cases.case3.path"),
      quote: t("cases.case3.quote"),
      image: "/mock/case-student3.svg",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("cases.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("cases.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-amber-50 to-amber-100">
                <Image src={caseItem.image} alt={caseItem.name} fill className="object-cover p-4" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{caseItem.name}</h3>
                    <p className="text-sm text-gray-500">{caseItem.age} · {caseItem.edu}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">{caseItem.path}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {caseItem.status}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-start gap-2">
                    <Quote className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-600 italic">{caseItem.quote}</p>
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
