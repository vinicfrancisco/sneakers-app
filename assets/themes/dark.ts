import { themes } from '@tamagui/themes'
import tokens from './utils/tokens'

const dark = {
  ...themes.dark,
  background: tokens.color.black,
  componentBackground: tokens.color.gray4,
  primary: tokens.color.gray1,
  secondary: tokens.color.gray2,
  icon: tokens.color.gray2,
}

export default dark
