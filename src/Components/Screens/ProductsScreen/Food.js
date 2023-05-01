import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

import data from '../Data'

export default function Food() {
    return (
        data.map((restaurant) => (          
            restaurant.menu.map((menuItem) => (
                <ListItem bottomDivider /* onPress={()=>{navigation.navigate('Detalles', {item: song})}} */>
                             {/* <Avatar rounded source={{uri:song.image}}/>  */}
                            <ListItem.Content>
                                <ListItem.Title>{menuItem.name}</ListItem.Title>
                                <ListItem.Subtitle>{menuItem.description}</ListItem.Subtitle>
                                <ListItem.Subtitle>{menuItem.price}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                </ListItem>
            ))
        ))
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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