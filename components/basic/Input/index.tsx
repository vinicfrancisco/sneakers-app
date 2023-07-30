import tokens from '@/assets/theme/tokens'
import Feather from '@expo/vector-icons/Feather'
import { useState } from 'react'
import { TextInputProps } from 'react-native'
import { GetProps, Stack, Input as TamaguiInput, useTheme } from 'tamagui'

interface InputProps extends TextInputProps {
  search?: boolean
}

function Input({ search, placeholder }: InputProps) {
  const { icon, primary } = useTheme()

  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <Stack
      flexDirection="row"
      ai="center"
      px="$4"
      borderWidth={isFocused ? 2 : 0}
      borderColor="$black"
      bg="$gray1"
      mx="$4"
      h="8%"
      mb="$6"
      br="$3"
    >
      {search && (
        <Feather
          name="search"
          size={24}
          color={isFocused ? primary.get() : icon.get()}
        />
      )}

      <TamaguiInput
        fontFamily="$heading"
        size="25%"
        bg="$gray1"
        marginLeft="$4"
        borderWidth={0}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholderTextColor="$gray2"
        f={1}
        fs="$4"
        placeholder={placeholder}
      />
    </Stack>
  )
}

export type HeadingProps = GetProps<typeof Input>

export default Input
