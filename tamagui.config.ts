import { createTamagui } from 'tamagui'
import { body, heading } from './assets/theme/fonts'
import shorthands from './assets/theme/shorthands'
import tokens from './assets/theme/tokens'

const config = createTamagui({
  fonts: {
    heading,
    body,
  },
  themes: {
    light: {
      bg: tokens.color.white,
      text: tokens.color.black,
      itemBg: tokens.color.gray1,
      subTitle: tokens.color.gray3,
    },
    dark: {
      bg: tokens.color.black,
      text: tokens.color.white,
      itemBg: tokens.color.gray3,
      subTitle: tokens.color.white,
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
