import SneakerCard from '~/components/SneakerCard'
import Heading from '~/components/basic/Heading'
import Input from '~/components/basic/Input'
import SafeAreaView from '~/components/basic/SafeAreaView'
import { FlashList } from '@shopify/flash-list'
import { Stack, getTokens } from 'tamagui'

const data = new Array(50).fill(0)

export default function Home() {
  const { space } = getTokens()

  return (
    <SafeAreaView f={1} bg="$background">
      <Stack f={1} paddingTop="$4">
        <Heading fs={'$5'} mx="$4" mb="$4">
          Search products
        </Heading>

        <Input search placeholder='Try "Yeezy boost 350"' />

        <Heading mx="$4" color="$secondary" fs="$2">
          Most Popular
        </Heading>

        <FlashList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Stack width="$8" />}
          estimatedItemSize={187}
          data={data}
          contentContainerStyle={{
            padding: space[4].val,
          }}
          renderItem={() => <SneakerCard />}
        />
      </Stack>
    </SafeAreaView>
  )
}
