import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationPropsType } from './src/navigation/navigationPropsType';

const Stack = createStackNavigator<NavigationPropsType>();

const App = () => {
  return (
    <AppNavigator/>
  )
}

export default App