import { createConfig } from '@gluestack-style/react'
import theme from './assets/theme'

const { aliases, colors, fontSizes, radii, space } = theme

export const config = createConfig({
  aliases,
  tokens: {
    colors,
    space,
    radii,
    letterSpacings: {},
    lineHeights: {},
    fontWeights: {},
    fontSizes,
    mediaQueries: {},
  },
  globalStyle: {
    variants: {
      shadow: {
        softShadow: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$black',
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
      },
    },
  },
} as const)

type ConfigType = typeof config

declare module '@gluestack-style/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomConfig extends ConfigType {}
}
