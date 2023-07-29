import { createTokens } from 'tamagui'

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

const tokens = createTokens({
  size,
  space: { ...size, '-1': -8, '-2': -16 },
  radius: { 0: 0, 1: 5, 2: 10, 3: 15, 4: 20 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#FFFCF9',
    black: '#353535',
  },
})

export default tokens
