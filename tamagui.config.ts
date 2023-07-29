import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

const headingFont = createInterFont()
const bodyFont = createInterFont()

const config = createTamagui({
  defaultTheme: 'light',
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  type TamaguiCustomConfig = AppConfig
}

export default config
