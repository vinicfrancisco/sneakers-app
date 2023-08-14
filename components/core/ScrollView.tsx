import { ScrollView as RNScrollView } from 'react-native'
import { styled } from '@gluestack-style/react'

const ScrollView = styled(RNScrollView, {
  defaultProps: {
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
  },
})

export default ScrollView
