import { memo } from 'react'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import theme from '~/assets/theme'
import { ISneaker } from '~/domain/sneakers'
import {
  Heading,
  Text,
  VStack,
  Image,
  TouchableOpacity,
  HStack,
  Stack,
} from '../core'

interface IShowcaseSneakerCardProps {
  data: ISneaker
}

const SCREEN_WIDTH = Dimensions.get('window').width
const CARD_WIDTH = SCREEN_WIDTH - 2 * theme.space.medium
const CARD_IMAGE_HEIGHT = 250
const CARD_BUTTON_WIDTH = CARD_WIDTH * 0.4
const CARD_BUTTON_HEIGHT = 70

function SneakerCard({ data }: IShowcaseSneakerCardProps) {
  const { name, brand, image, retailPrice } = data

  return (
    <TouchableOpacity>
      <VStack bg="$gray0" f={1} br="$large">
        <VStack p="$medium">
          <Heading numberOfLines={2}>{name}</Heading>
          <Text numberOfLines={1}>{brand}</Text>

          <Image
            alt={name}
            h={CARD_IMAGE_HEIGHT}
            w="100%"
            resizeMode="contain"
            source={{
              uri: image.small,
            }}
          />
        </VStack>

        <HStack
          alignItems="center"
          justifyContent="space-between"
          paddingLeft="$medium"
        >
          <Heading f={1}>
            {retailPrice ? `$ ${retailPrice}` : 'Not available'}
          </Heading>

          <Stack
            h={CARD_BUTTON_HEIGHT}
            w={CARD_BUTTON_WIDTH}
            bg="$black"
            alignItems="center"
            justifyContent="center"
            borderTopLeftRadius="$medium"
            borderBottomRightRadius="$large"
          >
            <Feather
              name="chevron-right"
              size={32}
              color={theme.colors.gray0}
            />
          </Stack>
        </HStack>
      </VStack>
    </TouchableOpacity>
  )
}

export default memo(SneakerCard)
