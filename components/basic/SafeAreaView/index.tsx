import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import { GetProps, styled } from 'tamagui'

const SafeAreaView = styled(RNSafeAreaView, {
  name: 'SafeAreaView',
})

export type SafeAreaViewProps = GetProps<typeof Text>

export default SafeAreaView
