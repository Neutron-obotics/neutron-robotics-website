import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { content, type SiteContent } from './content'

type Lang = 'fr' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: SiteContent
}

const LangContext = createContext<LangContextValue | null>(null)

function detectDefaultLang(): Lang {
  const stored = localStorage.getItem('nr-lang')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectDefaultLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('nr-lang', next)
  }

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: content[lang] }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
