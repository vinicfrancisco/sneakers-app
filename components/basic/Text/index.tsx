import { GetProps, Text as TamaguiText, styled } from 'tamagui'

const Text = styled(TamaguiText, {
  name: 'Text',

  fontFamily: '$body',
  color: '$primary',

  variants: {},
})

export type TextProps = GetProps<typeof Text>

export default Text
