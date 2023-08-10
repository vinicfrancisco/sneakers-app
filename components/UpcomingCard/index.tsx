import { TouchableOpacity } from 'react-native'
import { getDayInMonth, getMonthAbbreviation } from '~/utils/dates'
import { ISneaker } from '~/domain/sneakers'
import { Center, HStack, Heading, Stack, Text, VStack } from '../core'

interface IUpcomingCardProps {
  data: ISneaker
}

export default function UpcomingCard({ data }: IUpcomingCardProps) {
  const { releaseDate, name } = data

  return (
    <TouchableOpacity>
      <Stack bg="$gray0" br="$medium">
        <HStack>
          <VStack
            bg="$black"
            py="$small"
            px="$medium"
            br="$small"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          >
            <Heading color="$white">{getDayInMonth(releaseDate)}</Heading>

            <Text textAlign="center" color="$white">
              {getMonthAbbreviation(releaseDate)}
            </Text>
          </VStack>

          <Center f={1} alignItems="flex-start">
            <Text numberOfLines={1} textAlign="left" px="$medium">
              {name}
            </Text>
          </Center>
        </HStack>
      </Stack>
    </TouchableOpacity>
  )
}
