import { darkTheme, lightTheme } from "../constants/themes"

// if you defined themes
type AppThemes = {
  light: typeof lightTheme,
  dark: typeof darkTheme
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}