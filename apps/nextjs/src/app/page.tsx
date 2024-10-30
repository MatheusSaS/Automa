import { getLocaleOnServer, useTranslation as translate } from "@/i18n/server"

export default async function Home() {
  const locale = getLocaleOnServer()

  const { t } = await translate(locale, "home")
  return (
    <div className="flex w-full flex-col">
      <div className="flex  w-full flex-row">
        <div className="w-full ">
          <h1>{t("title")}</h1>
        </div>
      </div>
    </div>
  )
}
