"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useLanguage } from "@/lib/i18n"

export default function ProgramTop10Page() {
  const { t, lang } = useLanguage()
  const data = [
    {
      name: t("program.top10.country.vietnam"),
      value: 7100,
      linkLabel: t("program.top10.link.vietnam.label"),
      linkUrl: "https://vietnam.ahk.de/",
    },
    {
      name: t("program.top10.country.ukraine"),
      value: 5800,
      linkLabel: t("program.top10.link.ukraine.label"),
      linkUrl: "https://osvita.ua/",
      linkDesc: t("program.top10.link.ukraine.desc"),
    },
    {
      name: t("program.top10.country.turkey"),
      value: 4500,
      linkLabel: t("program.top10.link.turkey.label"),
      linkUrl: "https://tuerkei.ahk.de/",
      linkDesc: t("program.top10.link.turkey.desc"),
    },
    {
      name: t("program.top10.country.poland"),
      value: 3800,
      linkLabel: t("program.top10.link.poland.label"),
      linkUrl: "https://www.gov.pl/web/psrp",
      linkDesc: t("program.top10.link.poland.desc"),
    },
    {
      name: t("program.top10.country.italy"),
      value: 3200,
      linkLabel: t("program.top10.link.italy.label"),
      linkUrl: "https://www.inapp.org/",
      linkDesc: t("program.top10.link.italy.desc"),
    },
    {
      name: t("program.top10.country.croatia"),
      value: 2900,
      linkLabel: t("program.top10.link.croatia.label"),
      linkUrl: "https://kroatien.ahk.de/",
      linkDesc: t("program.top10.link.croatia.desc"),
    },
    {
      name: t("program.top10.country.serbia"),
      value: 2700,
      linkLabel: t("program.top10.link.serbia.label"),
      linkUrl: "https://serbien.ahk.de/",
      linkDesc: t("program.top10.link.serbia.desc"),
    },
  ]

  const maxValue = Math.max(...data.map((item) => item.value))
  const locale = lang === "zh" ? "zh-CN" : lang === "de" ? "de-DE" : "en-US"
  const numberFormat = new Intl.NumberFormat(locale)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("program.top10.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("program.top10.subtitle")}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
            {/* <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{t("program.top10.chart.title")}</h2>
              <span className="text-sm text-gray-500">{t("program.top10.chart.unitLabel")}</span>
            </div> */}
            <div className="space-y-4">
              {data.map((item, index) => (
                <div key={item.name} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-10 sm:col-span-2 text-sm font-medium text-gray-700">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={item.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {index + 1}. {item.name}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="top" sideOffset={6} className="max-w-xs text-left">
                        <div className="space-y-1">
                          <p className="font-semibold">{item.linkLabel}</p>
                          {item.linkDesc ? <p className="leading-relaxed text-white/80">{item.linkDesc}</p> : null}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${(item.value / maxValue) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-2 text-sm text-gray-600 sm:text-right">
                    {numberFormat.format(item.value)}
                    {t("program.top10.unit")}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500">{t("program.top10.source")}</p>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">{t("program.top10.insight.title")}</h2>
            <p className="text-gray-700 leading-relaxed">{t("program.top10.insight.desc1")}</p>
            <p className="text-gray-700 leading-relaxed">{t("program.top10.insight.desc2")}</p>
            <p className="text-gray-700 leading-relaxed">{t("program.top10.insight.desc3")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
