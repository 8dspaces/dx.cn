"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function MeihuaArtPage() {
  const { t, lang } = useLanguage()

  const content = {
    zh: {
      title: "石家庄美华学校",
      badge: "中国合作院校",
      intro: "2004年创办，石家庄市教育局批准的全日制民办艺术高中/职业中学。",
      location: "校区地址",
      locationText: "石家庄市鹿泉区（大年初一风情小镇/翠屏大街奇石街交口）",
      scale: "校园规模",
      scaleText: "占地约50亩，全封闭、半军事化管理",
      mission: "办学定位",
      missionText: "以艺术高考为核心，文化课+艺术专业课双轨教学，参加普通高考、与普高同等待遇。校训：崇德尚艺、知行合一。宗旨：一切为了学生，为了学生的一切。",
      majors: "开设专业",
      majorItems: [
        "美术绘画（国画、油画、内画、素描色彩/速写）",
        "音乐、舞蹈、书法",
        "电脑美术/平面设计、动漫设计",
      ],
      features: "教学特色",
      featureItems: [
        "双师配置：文化课+艺术课双套师资，教龄5–10年高考一线教师",
        "升学保障：本科升学率90%+，为八大美院、重点院校输送大量人才",
        "管理模式：全封闭半军事化、精细化管理，双班主任制",
        "配套设施：画室、艺术楼、公寓、食堂、浴室等一应俱全",
      ],
      honors: "办学荣誉",
      honorItems: [
        "全国自律与诚信建设先进单位",
        "石家庄市民办教育先进单位、教育教学先进单位",
        "河北省美术等级考核优秀生源基地",
      ],
    },
    en: {
      title: "Shijiazhuang Meihua School",
      badge: "Chinese Partner School",
      intro: "Founded in 2004, a full-time private art high school/vocational school approved by Shijiazhuang Education Bureau.",
      location: "Location",
      locationText: "Luquan District, Shijiazhuang (Chunqiu Town / Intersection of Cuiping St & Qishi St)",
      scale: "Campus Scale",
      scaleText: "Covering approximately 50 acres, closed management with semi-military style",
      mission: "School Mission",
      missionText: "Focusing on art college entrance exams, with dual-track teaching of academic courses + art professional courses. Same treatment as regular high schools for college entrance exams.",
      majors: "Majors",
      majorItems: [
        "Fine arts (Chinese painting, oil painting, inside painting, sketch/color/sketch)",
        "Music, dance, calligraphy",
        "Computer art/graphic design, animation design",
      ],
      features: "Teaching Features",
      featureItems: [
        "Dual-teacher configuration: academic + art teachers with 5-10 years of experience",
        "升学保障：本科升学率90%+",
        "Management: closed semi-military style, refined management, double homeroom teacher system",
        "Facilities: art studios, art building, dormitory, cafeteria, bathroom, etc.",
      ],
      honors: "Honors",
      honorItems: [
        "National Advanced Unit for Self-discipline and Integrity Construction",
        "Shijiazhuang Private Education Advanced Unit",
        "Excellent Student Base for Hebei Art Level Assessment",
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
              src="/河北学校.png"
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
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{c.location}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{c.locationText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{c.scale}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{c.scaleText}</p>
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

            <Card>
              <CardHeader>
                <CardTitle>{c.honors}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {c.honorItems.map((item, index) => (
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
