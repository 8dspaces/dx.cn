"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/i18n"
import { CompanySection } from "@/components/about/company-section"
import { TeamSection } from "@/components/about/team-section"
import { PartnersSection } from "@/components/about/partners-section"

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div> */}
        <Tabs defaultValue="company" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="company">{t("about.tab.company")}</TabsTrigger>
            <TabsTrigger value="team">{t("about.tab.team")}</TabsTrigger>
            <TabsTrigger value="partners">{t("about.tab.partners")}</TabsTrigger>
          </TabsList>
          <TabsContent value="company"><CompanySection /></TabsContent>
          <TabsContent value="team"><TeamSection /></TabsContent>
          <TabsContent value="partners"><PartnersSection /></TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
