\"use client\"

import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\"
import { Badge } from \"@/components/ui/badge\"
import { Button } from \"@/components/ui/button\"
import { useLanguage } from \"@/lib/i18n\"
import Link from \"next/link\"
import Image from \"next/image\"
import { ArrowLeft, ExternalLink } from \"lucide-react\"

export default function ImovePage() {
  const { lang } = useLanguage()

  const content = {
    zh: {
      title: \"iMOVE（BIBB 国际合作）\",
      badge: \"官方合作机构\",
      intro:
        \"iMOVE 由德国联邦教育、家庭、老年人、妇女与青年部（BMBFSFJ）发起，隶属于德国联邦职业教育研究所（BIBB）国际司，是促进德国培训机构与国际伙伴在职业教育与继续教育领域开展合作的网络平台。\",
      section1: \"我们是谁\",
      p1: \"iMOVE 的目标是促进国际协作，推动合作与业务对接，连接德国培训提供方与全球伙伴。\",
      p2: \"平台依托 BIBB 的研究与国际网络，围绕职业教育输出、标准与质量、培训项目衔接等展开合作。\",
      visit: \"访问官网\",
    },
    en: {
      title: \"iMOVE (BIBB International)\",
      badge: \"Official Partner\",
      intro:
        \"iMOVE is a networking platform initiated by the Federal Ministry (BMBFSFJ) and part of the international division at the Federal Institute for Vocational Education and Training (BIBB). It promotes international cooperation in VET, connecting German training providers with global partners.\",
      section1: \"Who We Are\",
      p1: \"iMOVE facilitates collaboration and business relationships in vocational and continuing education worldwide.\",
      p2: \"Backed by BIBB’s research and international reach, it focuses on standards, quality and programme alignment for effective outcomes.\",
      visit: \"Visit Website\",
    },
  }

  const c = lang === \"zh\" ? content.zh : content.en

  return (
    <section className=\"py-16 lg:py-24\">
      <div className=\"container mx-auto px-4\">
        <Link
          href=\"/partners\"
          className=\"inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 mb-8 transition-colors\"
        >
          <ArrowLeft className=\"h-4 w-4\" />
          {lang === \"zh\" ? \"返回合作单位\" : \"Back to Partners\"}
        </Link>

        <div className=\"max-w-4xl mx-auto\">
          <div className=\"relative h-64 md:h-80 w-full mb-8 rounded-xl overflow-hidden bg-gray-100\">
            <Image src=\"/iMOVE.png\" alt={c.title} fill className=\"object-contain\" />
          </div>

          <div className=\"mb-8\">
            <Badge variant=\"outline\" className=\"mb-4\">
              {c.badge}
            </Badge>
            <h1 className=\"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4\">
              {c.title}
            </h1>
            <p className=\"text-lg text-gray-600\">{c.intro}</p>
            <Button variant=\"link\" className=\"px-0 mt-2\" asChild>
              <a href=\"https://www.imove-germany.de/\" target=\"_blank\" rel=\"noopener noreferrer\">
                {c.visit}
                <ExternalLink className=\"h-4 w-4 ml-1\" />
              </a>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{c.section1}</CardTitle>
            </CardHeader>
            <CardContent className=\"space-y-3 text-gray-700\">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
