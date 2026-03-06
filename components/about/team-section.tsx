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
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("about.team.title")}</h2>
        <p className="text-gray-600">{t("about.team.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover p-4"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
