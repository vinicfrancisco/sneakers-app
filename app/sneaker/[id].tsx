import { Link, useGlobalSearchParams } from 'expo-router'

import { YStack, Text } from 'tamagui'

export default function SneakerDetails() {
  const { id } = useGlobalSearchParams()

  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Text color="black">Sneaker</Text>
      <Text color="black">{id}</Text>

      <Link href={`/(tabs)`}>Voltar para Home</Link>
    </YStack>
  )
}
