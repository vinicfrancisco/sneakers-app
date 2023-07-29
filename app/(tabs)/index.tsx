import { Link } from 'expo-router'
import { Stack, Text } from 'tamagui'

export default function Home() {
  return (
    <Stack>
      <Text color="black">Home</Text>

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
