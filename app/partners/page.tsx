"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const officialPartners = [
  {
    id: "imove",
    name: "iMOVE（BIBB 国际合作）",
    nameEn: "iMOVE (BIBB International)",
    description: "职业教育国际合作网络平台",
    descriptionEn: "International VET cooperation platform",
    href: "/partners/imove",
    image: "/iMOVE.png",
  },
]

const germanPartners = [
  {
    id: "dexin-carebridge",
    name: "Dexin CareBridge（德国）",
    nameEn: "Dexin CareBridge (Germany)",
    description: "德国本地项目协调与合作对接",
    descriptionEn: "Germany-based coordination and partnerships",
    href: "/partners/dexin-carebridge",
    image: "/Dexin_germany.png",
  },
]

const chinaPartners = [
  {
    id: "quanting",
    name: "新加坡 Quanting Employment Services",
    nameEn: "Quanting Employment Services (Singapore)",
    description: "亚洲人才招募、移民合规与落地安置",
    descriptionEn: "Asia talent recruitment, immigration compliance and settlement",
    href: "/partners/quanting",
    image: "/Quanting-Logo.png",
  },
  {
    id: "chinacare",
    name: "中国康养",
    nameEn: "China Health Care Group",
    description: "健康养老、医疗康养服务",
    descriptionEn: "Health care, medical and elderly care services",
    href: "/partners/chinacare",
    image: "/健康养老集团.png",
  },
  {
    id: "dcbz",
    name: "德中教育促进中心",
    nameEn: "German-Chinese Education Promotion Center",
    description: "中德教育交流与合作",
    descriptionEn: "China-Germany education exchange and cooperation",
    href: "/partners/dcbz",
    image: "/德中教育.png",
  },
  {
    id: "mva",
    name: "全国退役军人就业创业信息系统",
    nameEn: "National Veterans Employment & Entrepreneurship Information System",
    description: "退役军人就业服务、创业扶持",
    descriptionEn: "Veterans employment services, entrepreneurship support",
    href: "/partners/mva",
    image: "/全国退役军人就业创业信息系统.png",
  },
  {
    id: "xhd-wh",
    name: "新航道武汉学校",
    nameEn: "New Channel Wuhan School",
    description: "雅思、托福、出国留学培训",
    descriptionEn: "IELTS, TOEFL, overseas study training",
    href: "/partners/xhd-wh",
    image: "/新航道.png",
  },
  {
    id: "dalian-jinshi",
    name: "大连金石技工学校",
    nameEn: "Dalian Jinshi Technical School",
    description: "护理、数控加工、幼儿教育等热门专业",
    descriptionEn: "Nursing, CNC machining, early childhood education and other popular majors",
    href: "/partners/dalian-jinshi",
    image: "/大连学校.png",
  },
  {
    id: "meihua-art",
    name: "石家庄美华学校",
    nameEn: "Shijiazhuang Meihua School",
    description: "艺术高考、美术绘画、音乐舞蹈",
    descriptionEn: "Art college entrance exam, fine arts, music and dance",
    href: "/partners/meihua-art",
    image: "/河北学校.png",
  },
]

export default function PartnersPage() {
  const { t, lang } = useLanguage()

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("nav.partners")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {lang === "zh" ? "携手共进，合作共赢" : "Working together for win-win outcomes"}
          </p>
          <p className="text-gray-500 max-w-4xl mx-auto">
            {lang === "zh"
              ? "一德一信与德国及国内多家权威机构、院校、企业建立深度合作关系，共同推进中德双元制职业教育本土化落地与退役军人高质量就业工程。"
              : "Yide Yixin has established deep cooperative relationships with multiple authoritative institutions, schools, and enterprises in Germany and China to jointly promote the localization of German dual vocational education and high-quality employment projects for veterans."}
          </p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === "zh" ? "官方合作机构" : "Official Partners"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officialPartners.map((partner) => (
                <Link key={partner.id} href={partner.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                    {partner.image && (
                      <div className="relative aspect-[16/9] w-full bg-gray-100">
                        <Image
                          src={partner.image}
                          alt={lang === "zh" ? partner.name : partner.nameEn}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                        {lang === "zh" ? partner.name : partner.nameEn}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>
                        {lang === "zh" ? partner.description : partner.descriptionEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-blue-600 flex items-center gap-1">
                        {lang === "zh" ? "查看详情" : "View Details"}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === "zh" ? "德国机构" : "German Institutions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {germanPartners.map((partner) => (
                <Link key={partner.id} href={partner.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                    {partner.image && (
                      <div className="relative aspect-[16/9] w-full bg-gray-100">
                        <Image
                          src={partner.image}
                          alt={lang === "zh" ? partner.name : partner.nameEn}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                        {lang === "zh" ? partner.name : partner.nameEn}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>
                        {lang === "zh" ? partner.description : partner.descriptionEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-blue-600 flex items-center gap-1">
                        {lang === "zh" ? "查看详情" : "View Details"}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === "zh" ? "中国机构" : "Chinese Institutions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chinaPartners.map((partner) => (
                <Link key={partner.id} href={partner.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                    {partner.image && (
                      <div className="relative aspect-[16/9] w-full bg-gray-100">
                        <Image
                          src={partner.image}
                          alt={lang === "zh" ? partner.name : partner.nameEn}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                        {lang === "zh" ? partner.name : partner.nameEn}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>
                        {lang === "zh" ? partner.description : partner.descriptionEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-blue-600 flex items-center gap-1">
                        {lang === "zh" ? "查看详情" : "View Details"}
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
