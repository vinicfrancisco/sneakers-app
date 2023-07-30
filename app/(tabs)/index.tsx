import SneakerCard from '@/components/SneakerCard'
import { Heading } from '@/components/basic/Heading'
import { FlashList } from '@shopify/flash-list'
import { Stack, getTokens } from 'tamagui'

const data = new Array(50).fill(0)

export default function Home() {
  const { space } = getTokens()

  return (
    <Stack f={1} bg="$bg" padding="$4">
      <Heading mx="$4" color="$subTitle" fs="$2">
        Most Popular
      </Heading>

      <FlashList
        horizontal
        ItemSeparatorComponent={() => <Stack width="$8" />}
        estimatedItemSize={187}
        data={data}
        contentContainerStyle={{
          padding: space[4].val,
        }}
        renderItem={() => <SneakerCard />}
      />
    </Stack>
  )
}
