"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function DcbzPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "德中教育促进中心",
      badge: "中方合作机构",
      intro: "致力于推动中德教育交流与合作的非营利性机构。",
      business: "核心业务",
      businessItems: [
        "中德教育项目对接",
        "教育文化交流",
        "双语教育资源开发",
      ],
      visit: "访问官网",
    },
    en: {
      title: "German-Chinese Education Promotion Center",
      badge: "Chinese Partner Organization",
      intro: "A non-profit organization dedicated to promoting China-Germany education exchange and cooperation.",
      business: "Core Business",
      businessItems: [
        "China-Germany education project matching",
        "Education and cultural exchange",
        "Bilingual education resource development",
      ],
      visit: "Visit Website",
    },
  }

  const c = lang === "zh" ? content.zh : content.en

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/partners"
          className="inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {lang === "zh" ? "返回合作单位" : "Back to Partners"}
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 w-full mb-8 rounded-xl overflow-hidden bg-gray-100">
            <Image
              src="/德中教育.png"
              alt={c.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {c.badge}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {c.title}
            </h1>
            <p className="text-lg text-gray-600">{c.intro}</p>
            <Button variant="link" className="px-0 mt-2" asChild>
              <a href="https://www.dcbz.org/cn/" target="_blank" rel="noopener noreferrer">
                {c.visit}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{c.business}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.businessItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
