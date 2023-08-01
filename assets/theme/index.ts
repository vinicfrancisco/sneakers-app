import { createTheme } from 'tamagui'
import tokens from './tokens'

const light = createTheme({
  color: tokens.color.black,
  background: tokens.color.white,
  componentBackground: tokens.color.gray1,
  primary: tokens.color.black,
  secondary: tokens.color.gray3,
  icon: tokens.color.gray2,
})

type BaseTheme = typeof light

const dark: BaseTheme = createTheme({
  color: tokens.color.gray1,
  background: tokens.color.black,
  componentBackground: tokens.color.gray4,
  primary: tokens.color.gray1,
  secondary: tokens.color.gray2,
  icon: tokens.color.gray2,
})

const allThemes = {
  dark,
  light,
}

type ThemeName = keyof typeof allThemes

type Themes = {
  [key in ThemeName]: BaseTheme
}

export const themes: Themes = allThemes
