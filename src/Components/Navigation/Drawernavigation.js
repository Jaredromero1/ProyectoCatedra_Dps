import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/HomeScreen/Home';
import DrawerView from './DrawerView';

const Drawer = createDrawerNavigator();
export default function Drawer_Navigation(navigation) {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={(props) => <DrawerView {...props} />}
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#8F161C',
        },
        drawerActiveTintColor: '#8F161C',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: 25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
