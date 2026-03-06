"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="一德一信" width={50} height={50} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">一德一信</span>
                <span className="text-xs text-gray-500">YIDEYIXIN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{t("footer.company")}</p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@yideyixin.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>021-5089-7788</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/program" className="hover:text-blue-600 transition-colors">
                  {t("footer.process")}
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-blue-600 transition-colors">
                  {t("footer.german")}
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-blue-600 transition-colors">
                  {t("footer.matching")}
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-blue-600 transition-colors">
                  {t("footer.visa")}
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  {t("footer.companyInfo")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  {t("footer.team")}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-blue-600 transition-colors">
                  {t("footer.cases")}
                </Link>
              </li>
              <li>
                <Link href="/germany" className="hover:text-blue-600 transition-colors">
                  {t("footer.germany")}
                </Link>
              </li>
            </ul>
          </div>

          {/* QR Codes */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.followUs") || "关注我们"}</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2 bg-white rounded-lg overflow-hidden">
                  <Image src="/wexin_dexin.jpg" alt="WeChat" fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-500">{t("footer.wechat") || "微信"}</p>
              </div>
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2 bg-white rounded-lg overflow-hidden">
                  <Image src="/xhs_dexin.png" alt="Xiaohongshu" fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-500">{t("footer.xiaohongshu") || "小红书"}</p>
              </div>
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2 bg-white rounded-lg overflow-hidden">
                  <Image src="/web_dexin.png" alt="Website" fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-500">{t("footer.website") || "官网"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
