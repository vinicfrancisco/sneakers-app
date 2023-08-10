import { useContext } from 'react'
import { ThemeContext } from '~/providers/ThemeProvider'

function useAppTheme() {
  const { colorMode, toggleTheme } = useContext(ThemeContext)

  return { colorMode, toggleTheme }
}

export default useAppTheme
