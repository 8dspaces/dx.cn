"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const heroImages = [
    { src: "/01_hero_shanghai.jpg", alt: "Shanghai city view" },
    { src: "/02_hero_dexin.jpg", alt: "Dexin team and office" },
  ]

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)

    const interval = window.setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => {
      window.clearInterval(interval)
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="home" className="relative min-h-[72vh] overflow-hidden">
      <Carousel opts={{ loop: true }} setApi={setApi} className="absolute inset-0 h-full">
        <CarouselContent className="ml-0 h-full">
          {heroImages.map((image) => (
            <CarouselItem key={image.src} className="pl-0 h-full">
              <div className="relative h-[72vh] min-h-[520px] w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover" priority />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 min-h-[72vh] flex items-center">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {t("hero.companyName")}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white/90 md:text-xl text-pretty leading-relaxed max-w-3xl">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/program">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 group">
                  {t("hero.cta1")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 gap-2 group bg-transparent"
                >
                  {t("hero.cta2")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/60"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
