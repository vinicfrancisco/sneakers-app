import { createContext, useCallback, useState } from 'react'
import { useColorScheme } from 'react-native'
import { StyledProvider } from '@gluestack-style/react'
import { StatusBar, setStatusBarStyle } from 'expo-status-bar'
import { config } from '~/gluestack-style.config'

export interface ThemeContextData {
  colorMode: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()

  const [colorMode, setColorMode] = useState<'light' | 'dark'>(
    colorScheme || 'light',
  )

  const toggleTheme = useCallback(() => {
    setStatusBarStyle(colorMode === 'light' ? 'light' : 'dark')

    setColorMode((state) => (state === 'light' ? 'dark' : 'light'))
  }, [colorMode])

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        toggleTheme,
      }}
    >
      <StyledProvider config={config} colorMode={colorMode}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}
