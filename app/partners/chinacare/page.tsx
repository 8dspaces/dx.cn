"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ChinacarePage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "中国康养",
      badge: "健康养老服务",
      intro: "中国健康养老集团是国内领先的综合性健康养老服务提供商，专注于老年人健康管理与养老服务。",
      business: "主营业务",
      businessItems: [
        "养老机构运营与管理",
        "社区居家养老服务",
        "老年健康管理与康复",
        "养老护理人才培训",
        "智慧养老解决方案",
      ],
      advantages: "平台优势",
      advantageItems: [
        "专业的医疗护理团队",
        "完善的养老服务体系",
        "丰富的行业资源整合",
        "标准化运营管理模式",
        "创新的养老服务理念",
      ],
      visit: "访问官网",
    },
    en: {
      title: "China Health Care Group",
      badge: "Health & Elderly Care Services",
      intro: "China Health Care Group is a leading comprehensive health and elderly care service provider in China, focusing on elderly health management and elderly care services.",
      business: "Main Business",
      businessItems: [
        "Elderly care institution operation and management",
        "Community and home-based elderly care services",
        "Elderly health management and rehabilitation",
        "Elderly care talent training",
        "Smart elderly care solutions",
      ],
      advantages: "Platform Advantages",
      advantageItems: [
        "Professional medical and nursing team",
        "Complete elderly care service system",
        "Rich industry resource integration",
        "Standardized operation and management model",
        "Innovative elderly care service concept",
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
              src="/健康养老集团.png"
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
              <a href="http://www.checg.cn/zgjkyljtyxgs" target="_blank" rel="noopener noreferrer">
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

            <Card>
              <CardHeader>
                <CardTitle>{c.advantages}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.advantageItems.map((item, index) => (
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
