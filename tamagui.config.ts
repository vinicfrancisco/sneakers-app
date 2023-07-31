import { themes } from '@tamagui/themes'
import { createTamagui } from 'tamagui'
import { dark, light } from './assets/themes'
import { body, heading } from './assets/themes/utils/fonts'
import shorthands from './assets/themes/utils/shorthands'
import tokens from './assets/themes/utils/tokens'

const config = createTamagui({
  fonts: {
    heading,
    body,
  },
  themes: {
    ...themes,
    light,
    dark,
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
