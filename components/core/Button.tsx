import { TouchableOpacity } from 'react-native'
import { styled } from '@gluestack-style/react'
import Heading from './Heading'

const Container = styled(
  TouchableOpacity,
  {
    alignItems: 'center',
    bg: '$black',
    borderRadius: '$round',
    justifyContent: 'center',
    padding: '$medium',
    width: '100%',
  },
  {
    descendantStyle: ['_text'],
  },
)

const Text = styled(
  Heading,
  {
    color: '$white',
    fontSize: '$medium',
  },
  { ancestorStyle: ['_text'] },
)

const Button = {
  Container,
  Text,
}

export default Button
