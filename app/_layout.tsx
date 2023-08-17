import { useEffect } from 'react'
import Feather from '@expo/vector-icons/Feather'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import AppProvider from '~/providers'

export { ErrorBoundary } from 'expo-router'

// eslint-disable-next-line camelcase
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...Feather.font,
    Nunito: require('../assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    NunitoLight: require('../assets/fonts/Nunito-Light.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <AppProvider>
      <RootLayoutNav />
    </AppProvider>
  )
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="sneaker"
        options={{ headerShown: false, presentation: 'modal' }}
      />

      <Stack.Screen
        name="auth"
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      />
    </Stack>
  )
}
