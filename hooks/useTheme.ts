import { useContext } from 'react'
import { ThemeContext } from '~/providers/ThemeProvider'

function useAppTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return { theme, toggleTheme }
}

export default useAppTheme
