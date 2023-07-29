import { GetProps, Text as TamaguiText, styled } from 'tamagui'

export const Text = styled(TamaguiText, {
  name: 'Text',

  fontFamily: '$body',
  color: '$text',

  variants: {},
})

export type TextProps = GetProps<typeof Text>
