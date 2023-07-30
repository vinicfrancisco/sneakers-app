import { GetProps, styled } from 'tamagui'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView, {
  name: 'SafeAreaView',
})

export type SafeAreaViewProps = GetProps<typeof Text>

export default SafeAreaView
