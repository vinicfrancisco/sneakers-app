import { Link, useGlobalSearchParams } from 'expo-router'
import { YStack } from 'tamagui'
import Text from '~/components/basic/Text'

export default function SneakerDetails() {
  const { id } = useGlobalSearchParams()

  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Text>Sneaker</Text>
      <Text>{id}</Text>

      <Link href={`/(tabs)`}>Voltar para Home</Link>
    </YStack>
  )
}
