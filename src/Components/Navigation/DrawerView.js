import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerView( props ){


  return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>
                <Text style={styles.txt}>correo@gmail.com</Text>
            </View>
            
            <DrawerItemList {...props}/>

            <View style={styles.logout_container}>
              <TouchableOpacity onPress={ () => {
                  props.navigation.navigate('Login');
              } }>
               <Text style={styles.txt}><Ionicons name='log-out-outline' size={18} color={'#000'} /> Cerrar Sesión</Text>
              </TouchableOpacity>              
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: "auto",
    },
    logout_container: {
        flex: 1,
        marginTop:'8%',
        height: "auto",
      },
    txt:{
      fontSize:18,
      padding:10,
      color:'#000',
    },
    drawerHead:{
        backgroundColor:'#f1f1f1',
        height:'100%',
    },
  });

