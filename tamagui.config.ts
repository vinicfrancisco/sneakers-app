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
      background: tokens.color.white,
      componentBackground: tokens.color.gray1,
      primary: tokens.color.black,
      secondary: tokens.color.gray3,
    },
    dark: {
      background: tokens.color.black,
      componentBackground: tokens.color.gray4,
      primary: tokens.color.gray1,
      secondary: tokens.color.gray2,
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
