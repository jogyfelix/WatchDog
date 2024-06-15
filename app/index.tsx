import React from 'react'
import { Text, View } from 'react-native'
import Welcome from './auth/Welcome'
import { UnistylesRegistry } from 'react-native-unistyles'
import { darkTheme, lightTheme } from '../constants/themes'
import '../types/unistyles'

UnistylesRegistry
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true
  })

const index = () => {
  return (
   <Welcome/>
  )
}

export default index
