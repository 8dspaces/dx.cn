"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GermanyBenefitsPage() {
  const { t } = useLanguage()

  const benefits = [
    t("germany.benefits.item1"),
    t("germany.benefits.item2"),
    t("germany.benefits.item3"),
    t("germany.benefits.item4"),
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero */}
        {/* <div className="text-center mb-16 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("germany.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("germany.subtitle")}</p>
        </div> */}

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
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                  <Mail className="h-5 w-5" />
                  {t("germany.contact.email")}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
