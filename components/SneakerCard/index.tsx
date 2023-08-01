import { Dimensions, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { Image, Stack, XStack, YStack, useTheme } from 'tamagui'
import Heading from '~/components/basic/Heading'
import { ISneaker } from '~/domain/sneakers'
import Text from '../basic/Text'

interface ISneakerCardProps {
  data: ISneaker
}

const SCREEN_WIDTH = Dimensions.get('window').width
export const CARD_WIDTH = SCREEN_WIDTH * 0.6
const CARD_IMAGE_HEIGHT = 160
const CARD_BUTTON_WIDTH = CARD_WIDTH * 0.4
const CARD_BUTTON_HEIGHT = 70

export default function SneakerCard({ data }: ISneakerCardProps) {
  const { name, brand, image, retailPrice } = data

  const { background } = useTheme()

  return (
    <Stack
      bg="$componentBackground"
      w={CARD_WIDTH}
      br="$md"
      borderBottomRightRadius="$lg"
    >
      <TouchableOpacity>
        <YStack p="$md">
          <Heading fs="$5" paddingRight="$md" numberOfLines={2}>
            {name}
          </Heading>

          <Text fs="$3" numberOfLines={1} color="$secondary" mt="$sm">
            {brand}
          </Text>
        </YStack>

        <Image
          alt="Air Jordan 1 Travis Scott OG"
          h={CARD_IMAGE_HEIGHT}
          resizeMode="contain"
          source={{
            uri: image.original,
          }}
        />

        <XStack ai="center">
          <Heading f={1} fs="$5" px="$md">
            {`$ ${retailPrice}`}
          </Heading>

          <Stack
            h={CARD_BUTTON_HEIGHT}
            w={CARD_BUTTON_WIDTH}
            bg="$primary"
            ai="center"
            jc="center"
            borderTopLeftRadius="$md"
            borderBottomRightRadius="$xl"
          >
            <Feather name="chevron-right" size={32} color={background.get()} />
          </Stack>
        </XStack>
      </TouchableOpacity>
    </Stack>
  )
}
