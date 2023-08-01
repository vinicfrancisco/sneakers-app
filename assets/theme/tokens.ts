import { createTokens } from 'tamagui'

const size = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 34,
  true: 0,
}

const radius = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  true: 0,
  round: 9999,
}

const zIndex = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  true: 0,
}

const color = {
  white: '#FFFFFF',
  gray0: '#F5F5F5',
  gray1: '#F7F7F9',
  gray2: '#959CA7',
  gray3: '#6F7988',
  gray4: '#333436',
  black: '#1C1D20',
}

const tokens = createTokens({
  zIndex,
  radius,
  color,
  size,
  space: size,
})

export default tokens
