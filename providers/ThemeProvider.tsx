import { createContext, useCallback, useState } from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar, setStatusBarStyle } from 'expo-status-bar'
import { TamaguiProvider } from 'tamagui'
import appConfig from '~/tamagui.config'

export interface ThemeContextData {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme()

  const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme || 'light')

  const toggleTheme = useCallback(() => {
    setStatusBarStyle(theme === 'light' ? 'light' : 'dark')

    setTheme((state) => (state === 'light' ? 'dark' : 'light'))
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <TamaguiProvider config={appConfig} defaultTheme={theme}>
        <StatusBar style={systemTheme === 'dark' ? 'light' : 'dark'} />

        {children}
      </TamaguiProvider>
    </ThemeContext.Provider>
  )
}
