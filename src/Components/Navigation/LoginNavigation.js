import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Login'
import Registro from '../Screens/Registro'
import Drawer from '../Navigation/Drawernavigation'
const Stack = createNativeStackNavigator();
export default function Drawer_Navigation(){ 
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={'Login'} component={LoginScreen}/>
        <Stack.Screen name={'Registro'} component={Registro}/>
        <Stack.Screen name={'drawer'} component={Drawer}/>
    </Stack.Navigator>
  )
}