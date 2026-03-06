"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    intent: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a server
    setSubmitted(true)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-lg text-green-600 font-medium">{t("contact.form.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.contact")}
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder={t("contact.form.contactPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.intent")}
                    </label>
                    <Select value={formData.intent} onValueChange={(value) => setFormData({ ...formData, intent: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("contact.form.intentPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="work">{t("contact.form.intent.work")}</SelectItem>
                        <SelectItem value="recruit">{t("contact.form.intent.recruit")}</SelectItem>
                        <SelectItem value="other">{t("contact.form.intent.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    {t("contact.form.submit")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & QR Codes */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">{t("contact.info.company")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <p className="text-gray-600">{t("contact.info.address")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <p className="text-gray-600">{t("contact.info.phone")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <p className="text-gray-600">{t("contact.info.email")}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-4">{t("contact.info.deTitle")}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("contact.info.de")}</p>
                    <p>{t("contact.info.deEmail")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Codes */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("contact.qr.title")}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-2 bg-gray-100 rounded-lg overflow-hidden">
                      <Image src="/wexin_dexin.jpg" alt="WeChat" fill className="object-cover" />
                    </div>
                    <p className="text-sm text-gray-600">{t("contact.qr.wechat")}</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-2 bg-gray-100 rounded-lg overflow-hidden">
                      <Image src="/xhs_dexin.png" alt="Xiaohongshu" fill className="object-cover" />
                    </div>
                    <p className="text-sm text-gray-600">{t("contact.qr.xiaohongshu")}</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-2 bg-gray-100 rounded-lg overflow-hidden">
                      <Image src="/web_dexin.png" alt="Website" fill className="object-cover" />
                    </div>
                    <p className="text-sm text-gray-600">{t("contact.qr.website")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
