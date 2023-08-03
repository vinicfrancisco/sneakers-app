import { TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import theme from '~/assets/theme'
import useAppTheme from '~/hooks/useTheme'
import { HStack, Heading, VStack } from '../core'
import Input from '../core/Input'

export default function HomeHeader() {
  const { colorMode, toggleTheme } = useAppTheme()

  return (
    <VStack mx="$medium">
      <HStack justifyContent="space-between">
        <Heading mb="$medium">Search products</Heading>

        <TouchableOpacity
          onPress={toggleTheme}
          hitSlop={{
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
          }}
        >
          {colorMode === 'dark' ? (
            <Feather name="sun" size={24} color={theme.colors.white} />
          ) : (
            <Feather name="moon" size={24} color={theme.colors.black} />
          )}
        </TouchableOpacity>
      </HStack>

      <Input search placeholder='Try "Yeezy boost 350"' />
    </VStack>
  )
}
