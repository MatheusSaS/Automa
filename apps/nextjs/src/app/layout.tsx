import "@automa/ui/src/styles/globals.css"

import { Inter } from "next/font/google"
import LocalFont from "next/font/local"

import { cn } from "@automa/utils"
import { siteConfig } from "./config"
import I18NServer from "@/providers/i18n-server"
import Provider from "@/providers/provider"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontCal = LocalFont({
  src: "../styles/calsans.ttf",
  variable: "--font-cal",
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: "/favicon.ico",
    creator: "@automa",
  },
  metadataBase: new URL("https://automa-corp.jumr.dev"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontCal.variable,
        )}
      >
        <div id="__next">
          <I18NServer>
            <Provider>{children}</Provider>
          </I18NServer>
        </div>
      </body>
    </html>
  )
}
