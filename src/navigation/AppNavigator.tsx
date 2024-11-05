import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from '../screens/home_page/homePage'
import React from 'react'
import Favorite from '../screens/favorite_page/favorite'
import { NavigationPropsType } from './navigationPropsType'
import ProductDetail from '../screens/product_detail/productDetail'
import BasketPage from '../screens/basket_page/basketPage'


const Stack = createStackNavigator<NavigationPropsType>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}} />
            <Stack.Screen name='Favorite' component={Favorite} options={{headerShown: false}} />
            <Stack.Screen name='Product' component={ProductDetail} options={{headerShown: false}} />
            <Stack.Screen name='Basket' component={BasketPage} options={{headerShown: false}} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator