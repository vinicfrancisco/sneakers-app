import { TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { Image, Stack, XStack, YStack, useTheme } from 'tamagui'
import Heading from '~/components/basic/Heading'
import { ISneaker } from '~/domain/sneakers'

interface ISneakerCardProps {
  data: ISneaker
}

export default function SneakerCard({ data }: ISneakerCardProps) {
  const { shoeName, thumbnail, retailPrice } = data

  const { background } = useTheme()

  return (
    <Stack
      bg="$componentBackground"
      br="$6"
      w={220}
      borderBottomRightRadius="$10"
    >
      <TouchableOpacity>
        <YStack px="$4" paddingTop="$4">
          <Heading fs="$5" paddingRight="$5" numberOfLines={2}>
            {shoeName}
          </Heading>

          <Image
            alt="Air Jordan 1 Travis Scott OG"
            w={200}
            h={120}
            my="$8"
            resizeMode="stretch"
            source={{
              uri: thumbnail,
            }}
          />
        </YStack>

        <XStack ai="center">
          <Heading f={1} fs="$5" px="$4">
            {`$ ${retailPrice}`}
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
      </TouchableOpacity>
    </Stack>
  )
}
