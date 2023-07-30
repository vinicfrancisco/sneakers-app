import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { XStack, styled, useTheme } from 'tamagui'

interface InputProps extends TextInputProps {
  search?: boolean
}

const TamaguiInput = styled(TextInput, {
  name: 'Input',

  f: 1,
  p: '$4',
  color: '$primary',
  fontFamily: '$body',
  placeholderTextColor: '$secondary',
})

function Input({ search, ...props }: InputProps) {
  const { icon, primary } = useTheme()

  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <XStack
      ai="center"
      borderWidth={2}
      borderColor={isFocused ? '$primary' : 'transparent'}
      bg="$componentBackground"
      br="$3"
      paddingLeft="$4"
    >
      {search && (
        <Feather
          name="search"
          size={24}
          color={isFocused ? primary.get() : icon.get()}
        />
      )}

      <TamaguiInput
        {...props}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </XStack>
  )
}

export default Input
