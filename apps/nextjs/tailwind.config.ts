import type { Config } from "tailwindcss"

import sharedConfig from "@automa/tailwind-config"

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "src/**/*.{ts,tsx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
      ],
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          ...sharedConfig?.theme?.extend,
          animation: {
            ...sharedConfig?.theme?.extend?.animation,
            // Infinite scroll animation
            "infinite-scroll": "infinite-scroll 22s linear infinite",
          },
          keyframes: {
            ...sharedConfig?.theme?.extend?.keyframes,
            // Infinite scroll animation
            "infinite-scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-150%)" },
            },
          },
        },
      },
    },
  ],
}

export default config
