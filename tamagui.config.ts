import { themes } from '@tamagui/themes'
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
    ...themes,
    light: {
      ...themes.light,
      background: tokens.color.gray1,
      componentBackground: tokens.color.white,
      primary: tokens.color.black,
      secondary: tokens.color.gray3,
      icon: tokens.color.gray2,
    },
    dark: {
      ...themes.dark,
      background: tokens.color.black,
      componentBackground: tokens.color.gray4,
      primary: tokens.color.gray1,
      secondary: tokens.color.gray2,
      icon: tokens.color.gray2,
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
