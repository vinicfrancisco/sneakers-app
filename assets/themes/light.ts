import { themes } from '@tamagui/themes'
import tokens from './utils/tokens'

const light = {
  ...themes.light,
  background: tokens.color.white,
  componentBackground: tokens.color.gray1,
  primary: tokens.color.black,
  secondary: tokens.color.gray3,
  icon: tokens.color.gray2,
}

export default light
