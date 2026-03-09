"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function DexinCarebridgePage() {
  const { lang } = useLanguage()

  const content = {
    zh: {
      title: "Dexin CareBridge（德国）",
      badge: "德国机构",
      intro:
        "Dexin CareBridge 是与一德一信中德一体化结构中的德国公司，致力于推动中国与德国之间的护理人才合作项目。",
      section1: "我们做什么",
      p1: "我们与德国招聘机构、医疗机构以及中国合作伙伴 Dexin Consulting 紧密合作，共同推进护理人才的国际招聘与合作项目。",
      p2: "在中国端，合作伙伴负责候选人招聘、德语培训及职业准备；在德国端，Dexin CareBridge 负责项目协调、合作对接以及招聘流程的组织与支持。",
      p3: "目标是建立稳定、透明、可持续的国际医疗招聘合作模式，为医疗机构、招聘合作伙伴以及护理人才创造长期价值。",
      visit: "访问官网",
    },
    en: {
      title: "Dexin CareBridge (Germany)",
      badge: "Germany Partner",
      intro:
        "Dexin CareBridge is the Germany-based arm within the integrated China-Germany structure with Yide Yixin, advancing healthcare talent cooperation between the two countries.",
      section1: "What We Do",
      p1: "We work closely with German recruitment agencies and medical institutions, as well as our China partner Dexin Consulting, to deliver cross-border nursing talent projects.",
      p2: "In China: candidate sourcing, German language training and professional preparation. In Germany: project coordination, partnership liaison and recruitment process support.",
      p3: "Our goal is a stable, transparent and sustainable collaboration model that creates long-term value for medical institutions, recruiting partners and talent.",
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
            <Image src="/Dexin_germany.png" alt={c.title} fill className="object-cover" />
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
              <a href="https://dexin-carebridge.de/" target="_blank" rel="noopener noreferrer">
                {c.visit}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{c.section1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
              <p>{c.p3}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
