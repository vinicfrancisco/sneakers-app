import { Heading, VStack } from '../core'
import Input from '../core/Input'

export default function HomeHeader() {
  return (
    <VStack mx="$medium">
      <Heading mb="$medium">Search products</Heading>

      <Input search placeholder='Try "Yeezy boost 350"' />
    </VStack>
  )
}
