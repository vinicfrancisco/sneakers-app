import { createTokens } from 'tamagui'
import { tokens as defaultTokens } from '@tamagui/themes'

const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  true: 2,
}

const color = {
  white: '#FFFFFF',
  gray0: '#F5F5F5',
  gray1: '#F7F7F9',
  gray2: '#959CA7',
  gray3: '#333436',
  black: '#1C1D20',
}

const tokens = createTokens({
  ...defaultTokens,
  color,
  size,
  space: { ...size, '-1': -8, '-2': -16 },
})

export default tokens
