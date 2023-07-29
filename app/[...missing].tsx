import { Link, Stack } from 'expo-router'
import { YStack, Text } from 'tamagui'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <YStack>
        <Text>This screen doesn't exist.</Text>

        <Link href="/(tabs)">
          <Text>Go to home screen!</Text>
        </Link>
      </YStack>
    </>
  )
}
