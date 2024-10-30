"use client"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { LanguagesSupported } from "./language"

const loadLangResources = (lang: string) => ({
  translation: {
    home: require(`./${lang}/home`).default,
  },
})

// Automatically generate the resources object
const resources = LanguagesSupported.reduce((acc: any, lang: string) => {
  acc[lang] = loadLangResources(lang)
  return acc
}, {})

i18n.use(initReactI18next).init({
  lng: undefined,
  fallbackLng: "pt-BR",
  resources,
})

export const changeLanguage = i18n.changeLanguage
export default i18n
