import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { styled } from '@gluestack-style/react'
import theme from '~/assets/theme'
import HStack from '../HStack'

interface InputProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  search?: boolean
}

const StyledInput = styled(TextInput, {
  f: 1,
  p: '$medium',
  color: '$black',
})

function Input({ search, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <HStack
      alignItems="center"
      borderWidth={2}
      borderColor={isFocused ? '$black' : '$gray2'}
      bg="$gray1"
      br="$small"
      paddingLeft="$medium"
    >
      {search && (
        <Feather
          name="search"
          size={24}
          color={isFocused ? theme.colors.black : theme.colors.gray2}
        />
      )}

      <StyledInput
        {...props}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </HStack>
  )
}

export default Input
