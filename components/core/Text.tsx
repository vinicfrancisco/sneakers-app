import { Text as RNText } from 'react-native'
import { styled } from '@gluestack-style/react'

const Text = styled(RNText, {
  color: '$black',
  fontFamily: 'Nunito',

  variants: {
    bold: {
      true: {
        fontFamily: 'NunitoBold',
      },
    },
  },
})

export default Text
