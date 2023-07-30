import { Text } from '@/components/basic/Text'
import Feather from '@expo/vector-icons/Feather'
import { Image, Stack, XStack, useTheme } from 'tamagui'

export default function SneakerCard() {
  const { bg } = useTheme()

  return (
    <Stack bg="$itemBg">
      <Text>Air Jordan 1 Travis Scott OG</Text>

      <Image
        alt="Air Jordan 1 Travis Scott OG"
        source={{
          uri: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1608736403&q=57',
        }}
      />

      <XStack>
        <Text>5,594 €</Text>

        <Stack>
          <Feather name="chevron-right" size={24} color={bg.get()} />
        </Stack>
      </XStack>
    </Stack>
  )
}
