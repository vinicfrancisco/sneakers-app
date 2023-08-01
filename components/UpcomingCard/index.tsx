import { TouchableOpacity } from 'react-native'
import { XStack, YStack, Heading, Stack } from 'tamagui'
import { getDayInMonth, getMonthAbbreviation } from '~/utils/dates'
import { ISneaker } from '~/domain/sneakers'
import Text from '../basic/Text'

interface IUpcomingCardProps {
  data: ISneaker
}

export default function UpcomingCard({ data }: IUpcomingCardProps) {
  const { releaseDate, name } = data

  return (
    <TouchableOpacity>
      <Stack bg="$componentBackground" br="$md">
        <XStack>
          <YStack
            bg="$primary"
            py="$sm"
            px="$md"
            br="$md"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          >
            <Heading color="$background" fs="$5">
              {getDayInMonth(releaseDate)}
            </Heading>

            <Text color="$background" textAlign="center" fs="$3">
              {getMonthAbbreviation(releaseDate)}
            </Text>
          </YStack>

          <Text
            numberOfLines={1}
            textAlign="left"
            my="auto"
            px="$md"
            f={1}
            fs="$2"
            fontFamily="$heading"
          >
            {name}
          </Text>
        </XStack>
      </Stack>
    </TouchableOpacity>
  )
}
