import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import React from "react";

import data from "../Data";

export default function Food({navigation}) {
    return (
         data.map((restaurant) => (
            <View key={restaurant.id}>
              <Image source={restaurant.banner} style={styles.banner} />
              <View style={styles.restaurantInfo}>
                {/* <Image source={restaurant.logo} style={styles.logo} /> */}
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
              </View>
              <FlatList
                data={restaurant.menu}
                renderItem={({ item }) => (
                  <View style={styles.menuItem}>
                    {/* <Image source={item.image} style={styles.menuItemImage} /> */}
                    <View style={styles.menuItemInfo}>
                      <Text style={styles.menuItemName}>{item.name}</Text>
                      <Text style={styles.menuItemDescription}>{item.description}</Text>
                      <Text style={styles.menuItemPrice}>{item.price}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          ))
    );
}

const styles = StyleSheet.create({
    banner: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    restaurantInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    restaurantName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    menuItemImage: {
      width: 80,
      height: 80,
      resizeMode: 'cover',
      marginRight: 10,
    },
    menuItemInfo: {
      flex: 1,
    },
    menuItemName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    menuItemDescription: {
      fontSize: 16,
      color: '#555',
    },
    menuItemPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
  });

/* 
         data.map((restaurant) => (          
            restaurant.menu.map((menuItem) => (
                <ListItem bottomDivider onPress={()=>{navigation.navigate('Detalles', {item: song})}}>
                             <Avatar rounded source={{uri:song.image}}/> 
                            <ListItem.Content>
                                <ListItem.Title>{menuItem.name}</ListItem.Title>
                                <ListItem.Subtitle>{menuItem.description}</ListItem.Subtitle>
                                <ListItem.Subtitle>{menuItem.price}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                </ListItem>
            ))
        ))

 */

/* 

                <View>
         {data.map((restaurant) => (
            <View key={restaurant.id}>
                <Text>{restaurant.name}</Text>
                { restaurant.menu.map((menuItem) => (

                    <ListItem bottomDivider /* onPress={()=>{navigation.navigate('Detalles', {item: song})}} >
                       {/*  <Avatar rounded source={{uri:song.image}}/> *
                       <ListItem.Content>
                       <ListItem.Title>{menuItem.name}</ListItem.Title>
                       <ListItem.Subtitle>{menuItem.description}</ListItem.Subtitle>
                       <ListItem.Subtitle>{menuItem.price}</ListItem.Subtitle>
                   </ListItem.Content>
                   <ListItem.Chevron/>
               </ListItem>

           ))}                                            
       </View>
   ))}
   </View>

*/

/* 

 <View>
      {data.map((restaurant) => (
        <View key={restaurant.id}>
          <Text>{restaurant.name}</Text>
          {restaurant.menu.map((menuItem) => (
            <View key={menuItem.id}>
              <Text>{menuItem.name}</Text>
              <Text>{menuItem.description}</Text>
              <Text>${menuItem.price}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>

*/
