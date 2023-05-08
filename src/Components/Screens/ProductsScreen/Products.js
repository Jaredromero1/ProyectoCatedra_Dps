import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import MapView, {Marker} from 'react-native-maps'
import data from "../Data";
import color from "../color";
import { useNavigation } from "@react-navigation/native";

const Products = ({ route }) => {
    //Detecta el id al clickear un de los productos y filtra la informacion de ese id
    const { restaurantId } = route.params;
    const restaurant = data.find((r) => r.id === restaurantId);
    
    const navigation = useNavigation();

    //Realiza la llamada hacia el restaurante
    const handleCall = () => {
      Linking.openURL(`tel:${restaurant.number}`);
    };
    
    //Reconoce el item que se clickeo y manda la informacion a la pantalla de Details
    const handleItemPress = (item) => {
      navigation.navigate('Detalles', { item });
    };    

    //Tiene almacenado la informacion de latitude y longitude de los restaurantes
    const initialRegion = {
      latitude: restaurant.latitud,
      longitude: restaurant.longitud,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008,
    };

    //Lista de los productos
    const renderMenuItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => handleItemPress(item)}>
                <Image source={item.image} style={styles.menuItemImage} />
                <View style={styles.menuItemInfo}>
                    <Text style={styles.menuItemName}>{item.name}</Text>
                    <Text style={styles.menuItemDescription}>{item.description}</Text>
                    <Text style={styles.menuItemPrice}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    //Cabecera de la pantalla
    const headerItemScreen = () => {
      return (
        <View style={styles.header}>
          <Image source={restaurant.banner} style={styles.banner} />
          <View  style={styles.logo}>
            <Image source={restaurant.logo} style={styles.imagelogo} />  
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.info}>
              <Text style={styles.nameInfo}>{restaurant.name}</Text>
              <Text style={styles.description}>{restaurant.description}</Text>
            </View>
              <TouchableOpacity style={styles.bottomCall} onPress={handleCall}>
                <Image source={require('../../../../assets/telephone.png')} style={styles.call} />
              </TouchableOpacity>
          </View>
          <View style={styles.containerMap}>
            <MapView style={styles.map} region={initialRegion} scrollEnabled={false}>
              {
                restaurant.Ubicacion.map((item,i)=>{
                  return(
                    <Marker
                      key={i}
                      coordinate={{
                        latitude: restaurant.latitud,
                        longitude: restaurant.longitud,
                      }}
                      title={item.name}
                      description={item.category}
                    />
                  )        
                })
             }
            </MapView>
          </View>
        </View>
      );
    };

    //Muestra el codigo visual de {renderMenuItem} y de {headerItemScreen}
    return (
        <View style={styles.container}>   
            <FlatList 
              data={restaurant.menu} 
              ListHeaderComponent={headerItemScreen} 
              renderItem={renderMenuItem} 
              keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    banner: {
        width: "100%",
        height: 170,
        resizeMode: "cover",
    },
    restaurantInfo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    logo: {
      alignItems: "center",
      position: "relative",
      marginTop: -50,
    },
    imagelogo: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
    },
    containerInfo: {
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingVertical: 39,
      paddingHorizontal: 15,
    },
    nameInfo:{
      fontSize: 24,
      fontWeight: 'bold',
      color: color.TextColor,
    },
    description: {
      fontSize: 12,
      marginTop: 5,
      color: color.TextColor,
    },
    call: {
      width: 40,
      height: 40,
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    containerMap: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 39,
    },
    map: {
      width: '100%',
      height: 190,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#c1c1c1',
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 25,
        borderTopWidth: 1,
        borderTopColor: "#E7E7E7",
    },
    menuItemImage: {
        width: 85,
        height: 85,
        resizeMode: "cover",
        marginHorizontal: 25,
    },
    menuItemInfo: {
        flex: 1,        
    },
    menuItemName: {
        fontSize: 18,
        fontWeight: "bold",
        color: color.TextColor,
    },
    menuItemDescription: {
        fontSize: 16,
        color: color.TextColor,
        paddingTop: '2.7%',
    },
    menuItemPrice: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: color.PrimaryColor,
    },
});

export default Products;