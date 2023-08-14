import { createFont } from 'tamagui'

export const heading = createFont({
  family: 'NunitoBold',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
  },
  lineHeight: {
    1: 18,
    2: 22,
    3: 24,
    4: 27,
    5: 30,
    6: 32,
    7: 35,
  },

  face: {
    700: { normal: 'NunitoBold' },
  },
})

export const body = createFont({
  family: 'Nunito',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
  },
  lineHeight: {
    1: 18,
    2: 22,
    3: 24,
    4: 27,
    5: 30,
    6: 32,
    7: 35,
  },
  weight: {
    1: '300',
    2: '400',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  face: {
    300: { normal: 'NunitoLight' },
    400: { normal: 'Nunito' },
  },
})
