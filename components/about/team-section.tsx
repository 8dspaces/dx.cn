"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/lib/i18n"
import Image from "next/image"

export function TeamSection() {
  const { t, lang } = useLanguage()

  const teamMembers = [
    {
      image: "/南锦.jpg",
      name: t("about.team.ceo.name"),
      role: t("about.team.ceo.role"),
      bio: t("about.team.ceo.bio"),
    },
    {
      image: "/David.png",
      name: t("about.team.de.name"),
      role: t("about.team.de.role"),
      bio: t("about.team.de.bio"),
    },
    {
      image: "/Lea.png",
      name: t("about.team.de2.name"),
      role: t("about.team.de2.role"),
      bio: t("about.team.de2.bio"),
    },
    {
      image: "/李子涵.jpg",
      name: t("about.team.project.name"),
      role: t("about.team.project.role"),
      bio: t("about.team.project.bio"),
    },
    {
      image: "/Mick.png",
      name: t("about.team.german.name"),
      role: t("about.team.german.role"),
      bio: t("about.team.german.bio"),
    },
    {
      image: "/Jenny.png",
      name: t("about.team.visa.name"),
      role: t("about.team.visa.role"),
      bio: t("about.team.visa.bio"),
    },
  ]

  const [founder, ...others] = teamMembers
  const germanTeam = others.slice(0, 2)
  const chinaTeam = others.slice(2)
  const labels =
    lang === "zh"
      ? { de: "德国团队", cn: "中国团队" }
      : lang === "de"
      ? { de: "Deutschland Team", cn: "China Team" }
      : { de: "Germany Team", cn: "China Team" }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("about.team.title")}</h2>
        <p className="text-gray-600">{t("about.team.subtitle")}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card className="overflow-hidden">
          <div className="relative h-44 bg-gradient-to-br from-blue-50 to-gray-100">
            <Image src={founder.image} alt={founder.name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-base font-semibold text-gray-900">{founder.name}</h3>
            <p className="text-xs text-blue-600 mb-2">{founder.role}</p>
            <p className="text-sm text-gray-600 leading-snug">{founder.bio}</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">{labels.de}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {germanTeam.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-44 bg-gradient-to-br from-blue-50 to-gray-100">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p className="text-xs text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 leading-snug">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">{labels.cn}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chinaTeam.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-44 bg-gradient-to-br from-blue-50 to-gray-100">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="text-xs text-blue-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 leading-snug">{member.bio}</p>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
