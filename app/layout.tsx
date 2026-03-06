import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteLayout } from "@/components/site-layout"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "一德一信｜国际医护职业路径设计机构 | Yide Yixin Consulting & Management Group",
  description:
    "以德国国家医护与养老体系为载体，为学生设计 5–10 年国际医护职业路径：海外体系内成长 + 中长期职业升级。",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true"
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <SiteLayout>{children}</SiteLayout>
        {enableAnalytics && <Analytics />}
      </body>
    </html>
  )
}
