"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { Clock, MapPin, GraduationCap } from "lucide-react"

export function DualSystemSection() {
  const { t } = useLanguage()

  const phases = [
    {
      number: "1",
      title: t("program.dualsystem.phase1.title"),
      time: t("program.dualsystem.phase1.time"),
      location: t("program.dualsystem.phase1.location"),
      content: t("program.dualsystem.phase1.content"),
    },
    {
      number: "2",
      title: t("program.dualsystem.phase2.title"),
      time: t("program.dualsystem.phase2.time"),
      location: t("program.dualsystem.phase2.location"),
      content: t("program.dualsystem.phase2.content"),
    },
    {
      number: "3",
      title: t("program.dualsystem.phase3.title"),
      time: t("program.dualsystem.phase3.time"),
      location: t("program.dualsystem.phase3.location"),
      content: t("program.dualsystem.phase3.content"),
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t("program.dualsystem.title")}</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">{t("program.dualsystem.background")}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="relative overflow-visible">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {phase.number}
                </div>
                <CardContent className="p-6 pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{phase.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{phase.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{phase.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-4 border-t">
                    <GraduationCap className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{phase.content}</p>
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
