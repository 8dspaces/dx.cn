"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function XietongPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "新时代退役军人培训网",
      badge: "退役军人服务平台",
      intro: "专注于退役军人就业创业服务的综合性平台。",
      services: "服务内容",
      serviceItems: [
        "退役军人职业技能培训",
        "就业指导与岗位推荐",
        "创业扶持与项目对接",
        "学历提升与升学指导",
      ],
      features: "平台特色",
      featureItems: [
        "专业培训体系：结合市场需求设置培训课程",
        "就业渠道广泛：与多家企业建立合作关系",
        "创业支持：从项目选择到运营全程指导",
        "贴心服务：一对一职业规划咨询",
      ],
      visit: "访问平台",
    },
    en: {
      title: "New Era Veterans Training Network",
      badge: "Veterans Service Platform",
      intro: "A comprehensive platform focused on employment and entrepreneurship services for veterans.",
      services: "Services",
      serviceItems: [
        "Vocational skills training for veterans",
        "Employment guidance and job recommendations",
        "Entrepreneurship support and project matching",
        "Education advancement and study guidance",
      ],
      features: "Platform Features",
      featureItems: [
        "Professional training system: courses designed according to market demand",
        "Wide employment channels: partnerships with multiple enterprises",
        "Entrepreneurship support: full guidance from project selection to operation",
        "Personalized service: one-on-one career planning consultation",
      ],
      visit: "Visit Platform",
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
              src="/新时代退役军人培训网.png"
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
              <a href="http://hr.xtyjp.com/" target="_blank" rel="noopener noreferrer">
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
