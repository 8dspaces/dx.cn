"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/lib/i18n"
import Image from "next/image"

export function TeamSection() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      image: "/mock/team-ceo.svg",
      name: t("about.team.ceo.name"),
      role: t("about.team.ceo.role"),
      bio: t("about.team.ceo.bio"),
    },
    {
      image: "/mock/team-de-director.svg",
      name: t("about.team.de.name"),
      role: t("about.team.de.role"),
      bio: t("about.team.de.bio"),
    },
    {
      image: "/mock/team-de-manager.svg",
      name: t("about.team.de2.name"),
      role: t("about.team.de2.role"),
      bio: t("about.team.de2.bio"),
    },
    {
      image: "/mock/team-project-director.svg",
      name: t("about.team.project.name"),
      role: t("about.team.project.role"),
      bio: t("about.team.project.bio"),
    },
    {
      image: "/mock/team-german-trainer.svg",
      name: t("about.team.german.name"),
      role: t("about.team.german.role"),
      bio: t("about.team.german.bio"),
    },
    {
      image: "/mock/team-visa-manager.svg",
      name: t("about.team.visa.name"),
      role: t("about.team.visa.role"),
      bio: t("about.team.visa.bio"),
    },
  ]

  const [founder, ...others] = teamMembers

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("about.team.title")}</h2>
        <p className="text-gray-600">{t("about.team.subtitle")}</p>
      </div>

      <div className="flex justify-center">
        <Card className="overflow-hidden w-full max-w-md">
          <div className="relative h-40 bg-gradient-to-br from-blue-50 to-gray-100">
            <Image src={founder.image} alt={founder.name} fill className="object-contain p-3" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-gray-900">{founder.name}</h3>
            <p className="text-xs text-blue-600 mb-2">{founder.role}</p>
            <p className="text-sm text-gray-600 leading-snug">{founder.bio}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-40 bg-gradient-to-br from-blue-50 to-gray-100">
              <Image src={member.image} alt={member.name} fill className="object-contain p-3" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-sm font-semibold text-gray-900">{member.name}</h3>
              <p className="text-xs text-blue-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 leading-snug">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
