import { Ref, forwardRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { styled } from '@gluestack-style/react'
import theme from '~/assets/theme'
import HStack from './HStack'
import TouchableOpacity from './TouchableOpacity'

interface InputProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  iconName?: keyof typeof Feather.glyphMap
  onClearInput?: () => void
}

const StyledInput = styled(TextInput, {
  f: 1,
  p: '$medium',
  color: '$black',
  fontFamily: 'Nunito',
  fontSize: '$small',
})

const Input = forwardRef<TextInput, InputProps>(function Input(
  { iconName, onFocus, onBlur, onClearInput, ...props },
  ref,
) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true)

    onFocus?.(e)
  }

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false)

    onBlur?.(e)
  }

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
        ref={ref as Ref<TextInputProps>}
        placeholderTextColor={theme.colors.gray4}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />

      {!!onClearInput && (!!props.value?.length || isFocused) && (
        <TouchableOpacity
          paddingRight="$small"
          hitSlop={{
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
          }}
          onPress={onClearInput}
        >
          <Feather name="x" size={24} color={theme.colors.gray4} />
        </TouchableOpacity>
      )}
    </HStack>
  )
})

export default Input
