import { Link, Stack } from 'expo-router'
import { VStack, Text } from '~/components/core'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <VStack>
        <Text>This screen doesn't exist.</Text>

        <Link href="/(tabs)">
          <Text>Go to home screen!</Text>
        </Link>
      </VStack>
    </>
  )
}
