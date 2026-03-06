"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // Dropdown menu items
  const aboutDropdownItems = [
    { href: "/about/company", key: "nav.about.company" },
    { href: "/about/team", key: "nav.about.team" },
  ]

  const programDropdownItems = [
    { href: "/program/dual-system", key: "nav.program.dualsystem" },
    { href: "/program/top10", key: "nav.program.top10" },
  ]

  const germanyDropdownItems = [
    { href: "/germany/overview", key: "nav.germany.overview" },
    { href: "/germany/process", key: "nav.germany.process" },
    { href: "/germany/benefits", key: "nav.germany.benefits" },
  ]

  // Desktop nav order: Home, Program, Germany, Partners, About, Contact
  const homeNav = { href: "/", key: "nav.home" }
  const programNav = { href: "/program/dual-system", key: "nav.program" }
  const germanyNav = { href: "/germany/overview", key: "nav.germany" }
  const partnersNav = { href: "/partners", key: "nav.partners" }
  const aboutNav = { href: "/about/company", key: "nav.about" }
  const contactNav = { href: "/contact", key: "nav.contact" }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="一德一信" width={60} height={60} className="object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">一德一信</span>
            <span className="text-xs text-gray-600 hidden sm:block">YIDEYIXIN</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            href={homeNav.href}
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              isActive(homeNav.href)
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {t(homeNav.key as any)}
          </Link>
          {/* Program Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${
                  pathname.startsWith("/program")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {t("nav.program")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              {programDropdownItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {t(item.key as any)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Germany Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${
                  pathname.startsWith("/germany")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {t("nav.germany")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              {germanyDropdownItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {t(item.key as any)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Partners */}
          <Link
            href={partnersNav.href}
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              isActive(partnersNav.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {t(partnersNav.key as any)}
          </Link>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${
                  pathname.startsWith("/about")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {t("nav.about")}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-40">
              {aboutDropdownItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {t(item.key as any)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact */}
          <Link
            href={contactNav.href}
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              isActive(contactNav.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {t(contactNav.key as any)}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            <div className="border-t first:border-t-0 my-2 pt-2 first:pt-0 first:my-0">
              <Link
                href={homeNav.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                  isActive(homeNav.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                }`}
              >
                {t(homeNav.key as any)}
              </Link>
            </div>
            {/* Program Dropdown */}
            <div className="border-t first:border-t-0 my-2 pt-2 first:pt-0 first:my-0">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase mb-2">{t("nav.program")}</p>
              {programDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                    isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              ))}
            </div>

            {/* Germany Dropdown */}
            <div className="border-t my-2 pt-2">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase mb-2">{t("nav.germany")}</p>
              {germanyDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                    isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              ))}
            </div>

            {/* Partners */}
            <div className="border-t my-2 pt-2">
              <Link
                href={partnersNav.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                  isActive(partnersNav.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                }`}
              >
                {t(partnersNav.key as any)}
              </Link>
            </div>

            {/* About Dropdown */}
            <div className="border-t my-2 pt-2">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase mb-2">{t("nav.about")}</p>
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                    isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="border-t my-2 pt-2">
              <Link
                href={contactNav.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md block ${
                  isActive(contactNav.href) ? "text-blue-600 bg-blue-50" : "text-gray-700"
                }`}
              >
                {t(contactNav.key as any)}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
