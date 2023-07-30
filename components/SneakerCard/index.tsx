import Heading from '@/components/basic/Heading'
import Feather from '@expo/vector-icons/Feather'
import { TouchableOpacity } from 'react-native'
import { Image, Stack, XStack, useTheme } from 'tamagui'

export default function SneakerCard() {
  const { background } = useTheme()

  return (
    <TouchableOpacity>
      <Stack bg="$itemBackground" br="$6" w={220} borderBottomRightRadius="$10">
        <Stack px="$4" paddingTop="$4">
          <Heading fs="$5" paddingRight="$5">
            Air Jordan 1 Travis Scott OG
          </Heading>

          <Image
            alt="Air Jordan 1 Travis Scott OG"
            w={200}
            h={120}
            my="$8"
            resizeMode="stretch"
            source={{
              uri: 'https://droper-media.s3.amazonaws.com/1511202042239259.webp',
            }}
          />
        </Stack>

        <XStack ai="center">
          <Heading f={1} fs="$5" px="$4">
            5,594 €
          </Heading>

          <Stack
            h={70}
            w={240 * 0.4}
            bg="$primary"
            ai="center"
            jc="center"
            borderTopLeftRadius="$6"
            borderBottomRightRadius="$10"
          >
            <Feather name="chevron-right" size={32} color={background.get()} />
          </Stack>
        </XStack>
      </Stack>
    </TouchableOpacity>
  )
}
