import { Stack } from 'tamagui'
import { Link } from 'expo-router'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

export default function Home() {
  return (
    <Stack>
      <Heading>HEADING</Heading>
      <Text>TEXT</Text>

      <Link
        href={{
          pathname: `/sneaker`,
          params: {
            id: '123',
          },
        }}
      >
        See Yeezy
      </Link>
    </Stack>
  )
}
