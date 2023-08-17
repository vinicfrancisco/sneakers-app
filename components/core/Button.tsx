import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styled } from '@gluestack-style/react'
import Heading from './Heading'
import Loading from './Loading'

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean
  children: React.ReactNode
}

const Container = styled(
  TouchableOpacity,
  {
    alignItems: 'center',
    bg: '$black',
    borderRadius: '$round',
    justifyContent: 'center',
    padding: '$medium',
    width: '100%',

    variants: {
      loading: {
        true: {
          opacity: 0.3,
        },
      },
    },
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

function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <Container {...props} loading={loading ? 'true' : undefined}>
      {loading ? <Loading /> : <Text>{children}</Text>}
    </Container>
  )
}

Button.Container = Container
Button.Text = Text

export default Button
