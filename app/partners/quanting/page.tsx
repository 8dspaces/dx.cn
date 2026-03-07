"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function QuantingPage() {
  const { lang } = useLanguage()

  const content = {
    zh: {
      title: "新加坡 Quanting Employment Services",
      badge: "国际招聘与落地服务",
      intro:
        "Quanting 专注为企业招募来自亚洲的人才，覆盖专业与技能岗位。通过“五步法”实现从用工规划、跨境人才搜寻、严格筛选评估，到移民合规支持与本地安置的全流程服务，帮助企业降低用工不匹配风险并实现高效入职。",
      steps: "服务流程",
      stepItems: [
        "用工规划：对齐企业目标，制定岗位与来源市场方案",
        "搜寻覆盖：面向亚洲人才市场建立候选池并初筛",
        "严格筛选：兼顾硬技能与软能力，确保人岗匹配",
        "合规支持：签证与移民合规、一站式手续协调",
        "落地安置：入职与社区融入支持，提升留任率",
      ],
      advantages: "服务优势",
      advantageItems: [
        "深耕亚洲人才网络，专业/技能岗位均可覆盖",
        "标准化流程降低用工风险，缩短招付周期",
        "全流程陪伴至入职后，关注稳定与长期留任",
      ],
      visit: "访问官网",
    },
    en: {
      title: "Quanting Employment Services (Singapore)",
      badge: "International Recruitment & Settlement",
      intro:
        "Quanting recruits skilled and semi-skilled talent from across Asia. With a proven five-step process—from workforce planning, candidate sourcing and rigorous selection to immigration compliance and settlement—the team reduces mismatch risks and supports smooth onboarding and retention.",
      steps: "Process",
      stepItems: [
        "Planning: Align with your goals and target source markets",
        "Sourcing: Build candidate pipelines across Asian talent hubs",
        "Selection: Assess hard skills and soft traits for best fit",
        "Compliance: Integrated immigration & visa support",
        "Settlement: Onboarding and local integration assistance",
      ],
      advantages: "Highlights",
      advantageItems: [
        "Extensive Asian talent network for professional and skilled roles",
        "Standardised workflow reduces hiring risks and cycle time",
        "End-to-end support beyond arrival focused on retention",
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
            <Image src="/Quanting-Logo.png" alt={c.title} fill className="object-contain" />
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
              <a href="https://quanting.sg/" target="_blank" rel="noopener noreferrer">
                {c.visit}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{c.steps}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.stepItems.map((item, index) => (
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

