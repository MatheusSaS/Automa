import data from "./languages.json"
export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  "en-US": string
  "pt-BR": string
}

export const languages = data.languages

export const LanguagesSupported = languages
  .filter((item) => item.supported)
  .map((item) => item.value)

export const getLanguage = (locale: string) => {
  const supportedLocale = LanguagesSupported.find((lang) =>
    lang.startsWith(locale.split("-")[0]),
  )
  return (supportedLocale || LanguagesSupported[0]).replace("-", "_")
}
