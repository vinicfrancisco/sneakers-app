import { Stack } from 'expo-router'

export default function SneakersLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  )
}
