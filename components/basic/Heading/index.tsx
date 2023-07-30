import { GetProps, Heading as TamaguiHeading, styled } from 'tamagui'

export const Heading = styled(TamaguiHeading, {
  name: 'Heading',

  fontFamily: '$heading',
  color: '$text',
  fontSize: '$4',

  variants: {},
})

export type HeadingProps = GetProps<typeof Heading>
