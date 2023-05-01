import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Tiendas from '../Screens/HomeScreen/Tiendas'
import Restaurant from '../Screens/RestaurantScreen/Restaurant'

export default function RestaurantNavigation() {
    
    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator>
                <Stack.Screen name={'Tienda'} component={Tiendas}/>
                <Stack.Screen name={'Restaurantes'} component={Restaurant}/>
            </Stack.Navigator>
    );
}