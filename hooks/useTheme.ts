import { useContext } from 'react'
import { ThemeContext } from '~/contexts/ThemeContext'

function useAppTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return { theme, toggleTheme }
}

export default useAppTheme
