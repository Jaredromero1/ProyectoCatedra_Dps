import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Login'
import Registro from '../Screens/Registro'

import Drawer from '../Navigation/Drawernavigation'
import StackNavigation from '../Navigation/RestaurantNavigation'
import HomeScreen from '../Screens/HomeScreen/Home'

const Stack = createNativeStackNavigator();

export default function Drawer_Navigation(){ 
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name={'Registro'} component={Registro} options={{ headerShown: false }}/>
        <Stack.Screen name={'navigation'} component={StackNavigation} options={{gestureEnabled: false}}/>
    </Stack.Navigator>
  )
}