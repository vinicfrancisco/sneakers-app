import { memo } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import theme from '~/assets/theme'
import { ISneaker } from '~/domain/sneakers'
import { Heading, Stack, VStack, Image, HStack } from '../core'
import Text from '../core/Text'

interface IShowcaseSneakerCardProps {
  data: ISneaker
}

const SCREEN_WIDTH = Dimensions.get('window').width
export const CARD_WIDTH = SCREEN_WIDTH * 0.6
const CARD_IMAGE_HEIGHT = 160
const CARD_BUTTON_WIDTH = CARD_WIDTH * 0.4
const CARD_BUTTON_HEIGHT = 70

function ShowcaseSneakerCard({ data }: IShowcaseSneakerCardProps) {
  const { name, brand, image, retailPrice } = data

  return (
    <VStack
      bg="$gray0"
      w={CARD_WIDTH}
      br="$small"
      borderBottomRightRadius="$large"
    >
      <TouchableOpacity>
        <VStack p="$medium">
          <Heading numberOfLines={2}>{name}</Heading>

          <Text numberOfLines={1}>{brand}</Text>
        </VStack>

        <Image
          alt={name}
          h={CARD_IMAGE_HEIGHT}
          resizeMode="contain"
          source={{
            uri: image.small,
          }}
        />

        <HStack
          alignItems="center"
          justifyContent="space-between"
          paddingLeft="$medium"
        >
          <Heading f={1}>{`$ ${retailPrice}`}</Heading>

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
      </TouchableOpacity>
    </VStack>
  )
}

export default memo(ShowcaseSneakerCard)
