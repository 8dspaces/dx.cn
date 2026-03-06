"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./types"
import { zhTranslations } from "./zh"
import { enTranslations } from "./en"
import { deTranslations } from "./de"

export type { Language } from "./types"
export type TranslationKey = keyof typeof zhTranslations

const translations: Record<Language, Record<TranslationKey, string>> = {
  zh: zhTranslations,
  en: enTranslations as Record<TranslationKey, string>,
  de: deTranslations as Record<TranslationKey, string>,
}

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "dexin-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("zh")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && ["zh", "en", "de"].includes(stored)) {
      setLangState(stored)
    }
    setMounted(true)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
  }

  const t = (key: TranslationKey): string => {
    return translations[lang]?.[key] || key
  }

  // Always render children - use default language before mount
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
