import { createInterFont } from '@tamagui/font-inter'
import { createTamagui } from 'tamagui'
import shorthands from './assets/theme/shorthands'
import tokens from './assets/theme/tokens'

const headingFont = createInterFont()
const bodyFont = createInterFont()

const config = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: {
      bg: tokens.color.white,
      text: tokens.color.black,
      itemBg: tokens.color.gray1,
    },
    dark: {
      bg: tokens.color.black,
      text: tokens.color.white,
      itemBg: tokens.color.gray3,
    },
  },
  tokens,
  shorthands,
  onlyAllowShorthands: true,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
