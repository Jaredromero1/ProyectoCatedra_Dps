import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Restaurant from '../Screens/RestaurantScreen/Restaurant'
import Products from '../Screens/ProductsScreen/Products'
import BottomRestaurant from '../Screens/HomeScreen/BottomRestaurant'
import Home from '../Screens/HomeScreen/Home'

export default function RestaurantNavigation() {
    
    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name={'Restaurantess'} component={Restaurant}/>
                <Stack.Screen name={'Productos'} component={Products}/>
            </Stack.Navigator>
    );
}