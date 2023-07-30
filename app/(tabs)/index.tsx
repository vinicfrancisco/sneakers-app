import SneakerCard from '@/components/SneakerCard'
import { FlashList } from '@shopify/flash-list'
import { Stack } from 'tamagui'

const data = new Array(50).fill(0)

export default function Home() {
  return (
    <Stack f={1} bg="$bg">
      <FlashList
        horizontal
        estimatedItemSize={187}
        data={data}
        renderItem={() => <SneakerCard />}
      />
    </Stack>
  )
}
