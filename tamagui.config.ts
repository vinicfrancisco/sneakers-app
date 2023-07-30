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
      itemBackground: tokens.color.gray1,
      primary: tokens.color.black,
      secondary: tokens.color.gray3,
    },
    dark: {
      background: tokens.color.black,
      itemBackground: tokens.color.gray3,
      primary: tokens.color.white,
      secondary: tokens.color.white,
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
