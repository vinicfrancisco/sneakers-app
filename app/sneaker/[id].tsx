import { Link, useGlobalSearchParams } from 'expo-router'
import { VStack, Text } from '~/components/core'

export default function SneakerDetails() {
  const { id } = useGlobalSearchParams()

  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
      <Text>Sneaker</Text>
      <Text>{id}</Text>

      <Link href={`/(tabs)`}>Voltar para Home</Link>
    </VStack>
  )
}
