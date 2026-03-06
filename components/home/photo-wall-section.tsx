"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

export function PhotoWallSection() {
  const { t } = useLanguage()

  const photos = [
    { src: "/mock/office-shanghai.svg", alt: "上海办公室" },
    { src: "/mock/office-germany.svg", alt: "德国办公室" },
    { src: "/mock/scene-cn-training.svg", alt: "国内培训" },
    { src: "/mock/scene-de-hospital.svg", alt: "德国医院" },
    { src: "/mock/scene-consultation.svg", alt: "咨询服务" },
    { src: "/mock/team-ceo.svg", alt: "团队照片" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t("home.photowall.title") || "精彩瞬间"}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("home.photowall.subtitle") || "记录每一位学员的成长与收获"}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 group ${
                index === 0 ? "md:col-span-1 md:row-span-2" : ""
              } ${index === 3 ? "md:col-span-1 md:row-span-2" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
