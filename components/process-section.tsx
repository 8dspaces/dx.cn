"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, GraduationCap, Briefcase, FileCheck, Plane } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ProcessSection() {
  const { t } = useLanguage()
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
    },
    {
      number: "2",
      icon: GraduationCap,
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
    },
    {
      number: "3",
      icon: Briefcase,
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
    },
    {
      number: "4",
      icon: FileCheck,
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
    },
    {
      number: "5",
      icon: FileText,
      title: t("process.step5.title"),
      description: t("process.step5.desc"),
    },
    {
      number: "6",
      icon: Plane,
      title: t("process.step6.title"),
      description: t("process.step6.desc"),
    },
  ]

  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            {t("process.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">{t("process.subtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="h-5 w-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed text-pretty">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div className="w-6 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
