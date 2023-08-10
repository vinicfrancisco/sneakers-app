import { TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useTheme, YStack, XStack, Heading } from 'tamagui'
import useAppTheme from '~/hooks/useTheme'
import Input from '../basic/Input'

export default function HomeHeader() {
  const { primary } = useTheme()
  const { theme, toggleTheme } = useAppTheme()

  return (
    <YStack mx="$md">
      <XStack jc="space-between">
        <Heading fs="$5" mb="$md">
          Search products
        </Heading>

        <TouchableOpacity
          onPress={toggleTheme}
          hitSlop={{
            top: 8,
            bottom: 8,
            left: 8,
            right: 8,
          }}
        >
          {theme === 'dark' ? (
            <Feather name="sun" size={24} color={primary.get()} />
          ) : (
            <Feather name="moon" size={24} color={primary.get()} />
          )}
        </TouchableOpacity>
      </XStack>

      <Input search placeholder='Try "Yeezy boost 350"' />
    </YStack>
  )
}
