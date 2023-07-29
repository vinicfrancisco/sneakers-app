import { GetProps, Heading as TamaguiHeading, styled } from 'tamagui'

export const Heading = styled(TamaguiHeading, {
  name: 'Heading',

  fontFamily: '$heading',
  color: '$text',

  variants: {
    h1: {},
    h2: {},
    h3: {},
  },
})

export type HeadingProps = GetProps<typeof Heading>
