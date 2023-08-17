import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from '~/store'
import { AuthProvider } from './AuthContext'
import { ThemeProvider } from './ThemeProvider'

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}
