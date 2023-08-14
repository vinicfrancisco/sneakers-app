import { GetProps, Heading as TamaguiHeading, styled } from 'tamagui'

const Heading = styled(TamaguiHeading, {
  name: 'Heading',

  fontFamily: '$heading',
  color: '$primary',
  fontSize: '$4',

  variants: {},
})

export type HeadingProps = GetProps<typeof Heading>

export default Heading
