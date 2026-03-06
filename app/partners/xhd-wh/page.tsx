"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function XhdWhPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "新航道武汉学校",
      badge: "语言培训机构",
      intro: "新航道武汉学校是新航道国际教育集团在武汉的分校，专注于雅思、托福等出国语言培训。",
      features: "学校特色",
      featureItems: [
        "专业雅思、托福培训团队",
        "个性化学习方案设计",
        "沉浸式英语学习环境",
        "丰富的海外院校资源",
      ],
      services: "培训服务",
      serviceItems: [
        "雅思培训（ IELTS）",
        "托福培训（TOEFL）",
        "SAT/ACT培训",
        "留学申请指导",
        "背景提升项目",
      ],
      visit: "访问官网",
    },
    en: {
      title: "New Channel Wuhan School",
      badge: "Language Training Institution",
      intro: "New Channel Wuhan School is a branch of New Channel International Education Group in Wuhan, specializing in IELTS, TOEFL and other overseas language training.",
      features: "School Features",
      featureItems: [
        "Professional IELTS and TOEFL training team",
        "Personalized learning plan design",
        "Immersive English learning environment",
        "Rich overseas university resources",
      ],
      services: "Training Services",
      serviceItems: [
        "IELTS Training",
        "TOEFL Training",
        "SAT/ACT Training",
        "Study abroad application guidance",
        "Background enhancement programs",
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
              src="/新航道.png"
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
              <a href="https://wh.xhd.cn/m/" target="_blank" rel="noopener noreferrer">
                {c.visit}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
