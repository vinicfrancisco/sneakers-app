import { ActivityIndicator } from 'react-native'
import { styled } from '@gluestack-style/react'

const Loading = styled(ActivityIndicator, {
  defaultProps: {
    size: 'small',
  },
})

export default Loading
