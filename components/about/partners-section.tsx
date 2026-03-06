"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import Image from "next/image"

export function PartnersSection() {
  const { t } = useLanguage()

  const cnSchools = [
    "/mock/partner-cn-school1.svg",
    "/mock/partner-cn-school2.svg",
    "/mock/partner-cn-school3.svg",
    "/mock/partner-cn-school4.svg",
  ]

  const cnEnterprises = [
    "/mock/partner-cn-enterprise1.svg",
    "/mock/partner-cn-enterprise2.svg",
  ]

  const dePartners = [
    "/mock/partner-de-hospital1.svg",
    "/mock/partner-de-hospital2.svg",
    "/mock/partner-de-care1.svg",
    "/mock/partner-de-care2.svg",
  ]

  return (
    <div className="space-y-12">
      {/* Chinese Schools */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.partners.cn.schools.title")}</h3>
          <p className="text-gray-600 text-sm">{t("about.partners.cn.schools.desc")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cnSchools.map((src, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-center h-24 bg-gray-50">
                <Image src={src} alt={`School ${index + 1}`} width={150} height={80} className="object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Chinese Enterprises */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.partners.cn.enterprises.title")}</h3>
          <p className="text-gray-600 text-sm">{t("about.partners.cn.enterprises.desc")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cnEnterprises.map((src, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-center h-24 bg-gray-50">
                <Image src={src} alt={`Enterprise ${index + 1}`} width={150} height={80} className="object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* German Partners */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.partners.de.title")}</h3>
          <p className="text-gray-600 text-sm">{t("about.partners.de.desc")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dePartners.map((src, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-center h-24 bg-blue-50">
                <Image src={src} alt={`Partner ${index + 1}`} width={150} height={80} className="object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
