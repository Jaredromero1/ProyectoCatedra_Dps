import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Importaciones de pantallas
import RestaurantNavigation from '../Navigation/RestaurantNavigation'
import Home from '../Screens/HomeScreen/Home'
//Importacion para el diseño del drawer
import DrawerView from './DrawerView';

const Drawer = createDrawerNavigator();

export default function Drawer_Navigation(navigation) {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="navigation"
      drawerPosition="right"
      drawerContent={(props) => <DrawerView {...props} />}
      screenOptions={{
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#f1f1f1',
        },
        drawerActiveTintColor: '#8F161C',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: 25,
          fontSize: 15,
        },
      }}>
      
      <Drawer.Screen name="Inicio" component={RestaurantNavigation} /* options={{ headerShown: false }} *//>

    </Drawer.Navigator>
  );
}
