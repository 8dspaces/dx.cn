"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function MvaPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "全国退役军人就业创业信息系统",
      badge: "退役军人服务平台",
      intro: "由退役军人事务部主管的全国性退役军人就业创业服务平台，为退役军人提供全方位的就业创业服务。",
      services: "服务内容",
      serviceItems: [
        "退役军人就业信息发布与对接",
        "职业技能培训与提升",
        "创业扶持政策咨询",
        "就业创业典型宣传",
        "线上线下招聘活动",
      ],
      features: "平台特色",
      featureItems: [
        "官方权威平台：由退役军人事务部主管",
        "信息覆盖面广：全国退役军人就业创业信息汇聚",
        "服务功能完善：培训、就业、创业全链条服务",
        "政策对接及时：最新退役军人优惠政策及时发布",
      ],
      visit: "访问平台",
    },
    en: {
      title: "National Veterans Employment & Entrepreneurship Information System",
      badge: "Veterans Service Platform",
      intro: "A nationwide veterans employment and entrepreneurship service platform supervised by the Ministry of Veterans Affairs, providing comprehensive employment and entrepreneurship services for veterans.",
      services: "Services",
      serviceItems: [
        "Veterans employment information release and matching",
        "Vocational skills training and enhancement",
        "Entrepreneurship support policy consultation",
        "Employment and entrepreneurship typical promotion",
        "Online and offline recruitment activities",
      ],
      features: "Platform Features",
      featureItems: [
        "Official platform: Supervised by the Ministry of Veterans Affairs",
        "Wide information coverage: National veterans employment and entrepreneurship information aggregation",
        "Complete service functions: Full-chain services for training, employment, and entrepreneurship",
        "Timely policy updates: Latest veterans preferential policies promptly released",
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
              src="/mva.png"
              alt={c.title}
              fill
              className="object-contain"
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
              <a href="https://wsfw.mva.gov.cn" target="_blank" rel="noopener noreferrer">
                {c.visit}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{c.services}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.serviceItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{c.features}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.featureItems.map((item, index) => (
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
