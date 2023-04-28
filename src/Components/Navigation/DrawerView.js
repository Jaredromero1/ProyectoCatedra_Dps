import * as React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerView( props ){


  return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>
                <Image source={require('../../../assets/man.png')} style={styles.imagen}/>
                <View>
                  <Text style={styles.txtUsername}>Username</Text>
                  <Text style={styles.txt}>correo@gmail.com</Text>
                </View>
            </View>
            
            <DrawerItemList {...props}/>

            <View style={styles.logout_container}>
              <TouchableOpacity onPress={ () => {
                  props.navigation.navigate('Login');
              } }>
               <Text style={styles.txtCerrar}><Ionicons name='log-out-outline' size={18} color={'#000'} /> Cerrar Sesión</Text>
              </TouchableOpacity>              
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      height: "auto",
      flexDirection: 'row',
      paddingBottom: 30
    },
    logout_container: {
        flex: 1,
        marginTop:'8%',
        height: "auto",
      },
    txtUsername:{
      fontSize:18,
      paddingVertical: 7,
      color:'#000',
      fontWeight: 'bold',
    },
    txt:{
      fontSize:18,
      color:'#000',
    },
    imagen:{
      height: 54,
      width: 54,
      display: 'flex',
      justifyContent: 'center',
      alingContent: 'center',
      marginRight: 15,
      marginLeft: 20,
    },
    txtCerrar:{
      fontSize:18,
      padding: 10,
      color:'#000',
    },
    drawerHead:{
        backgroundColor:'#f1f1f1',
        height:'100%',
    },
  });

