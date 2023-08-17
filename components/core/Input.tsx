import { forwardRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { styled } from '@gluestack-style/react'
import theme from '~/assets/theme'
import HStack from './HStack'

interface InputProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  iconName?: keyof typeof Feather.glyphMap
}

const StyledInput = styled(TextInput, {
  f: 1,
  p: '$medium',
  color: '$black',
  fontFamily: 'Nunito',
  fontSize: '$small',
})

const Input = forwardRef<TextInput, InputProps>(function Input(
  { iconName, ...props },
  ref,
) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <HStack
      alignItems="center"
      borderWidth={2}
      borderColor={isFocused ? '$black' : 'transparent'}
      bg="$gray0"
      br="$small"
      paddingLeft="$medium"
    >
      {iconName && (
        <Feather
          name={iconName}
          size={24}
          color={isFocused ? theme.colors.black : theme.colors.gray4}
        />
      )}

      <StyledInput
        ref={ref as any}
        {...props}
        placeholderTextColor={theme.colors.gray4}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </HStack>
  )
})

export default Input
