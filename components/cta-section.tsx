"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export function CTASection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-blue-100 text-pretty leading-relaxed">{t("cta.subtitle")}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 gap-2 group mt-6">
              {t("cta.button")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
