"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function DalianJinshiPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "大连金石技工学校",
      badge: "中国合作院校",
      intro: "学校始建于1999年，是辽宁省政府批准设立、具有独立法人资格的民办全日制技工学校，报考代码：J124Z。",
      campus: "校区与规模",
      campusItems: [
        "两大校区：金普新区大黑山校区（凤祥路308号）、保税区校区（海星路9号）",
        "校园依山傍海、环境优美，占地约6.6万㎡",
        "在校生1400余人，教职员工200余人，专任教师106人",
      ],
      mission: "办学定位与宗旨",
      missionText: "以「创建有文化内涵的职业教育品牌、弘扬工匠精神」为宗旨，坚持立德树人、产教融合、岗课融通，培养「有技术、有文化、有爱心、有孝道」的技能型人才。",
      majors: "专业与实训",
      majorItems: [
        "数控加工、护理、幼儿教育、口腔义齿制造、计算机应用、旅游管理、汽车营销、美术设计、网络营销等热门专业",
        "建有数控、护理、口腔义齿、计算机、舞蹈/钢琴/画室、模拟幼儿园等高标准实训室",
      ],
      features: "办学特色",
      featureItems: [
        "升学+就业双轨：可参加单招、对口升学、普通高考，打通高职升学通道",
      ],
    },
    en: {
      title: "Dalian Jinshi Technical School",
      badge: "Chinese Partner School",
      intro: "Founded in 1999, it is a full-time technical school approved by Liaoning Provincial Government with independent legal person status. Application code: J124Z.",
      campus: "Campus & Scale",
      campusItems: [
        "Two campuses: Dalian Jinpu New Area Dahaishan Campus (No. 308 Fengxiang Road), Free Trade Zone Campus (No. 9 Haixing Road)",
        "Mountain and sea location, beautiful environment, covering approximately 66,000㎡",
        "Over 1,400 students, over 200 faculty members, 106 full-time teachers",
      ],
      mission: "Mission & Purpose",
      missionText: "Committed to 'creating a vocational education brand with cultural connotation and promoting the spirit of craftsmanship', cultivating skilled talents with 'technology, culture, love and filial piety'.",
      majors: "Majors & Training",
      majorItems: [
        "Popular majors: CNC machining, nursing, early childhood education, dental prosthesis manufacturing, computer application, tourism management, automotive marketing, art design, online marketing",
        "High-standard training rooms for CNC, nursing, dental prosthesis, computer, dance/piano/art studio, simulated kindergarten",
      ],
      features: "School Characteristics",
      featureItems: [
        "Dual track for further study + employment: can participate in single recruitment, vocational college entrance exam, regular college entrance exam",
      ],
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
              src="/大连学校.png"
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
              <a href="/大连金石.mp4" target="_blank" rel="noopener noreferrer">
                {lang === "zh" ? "查看学校介绍视频" : "Watch School Introduction Video"}
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{c.campus}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.campusItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{c.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{c.missionText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{c.majors}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.majorItems.map((item, index) => (
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
