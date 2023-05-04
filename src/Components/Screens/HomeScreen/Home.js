import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
//importaciones de componentes
import Tiendas from "./Tiendas";

import Opciones from "./Opciones"
import Restaurant from "../RestaurantScreen/Restaurant";
import RestaurantNavigation from "../../Navigation/RestaurantNavigation";
import BottomRestaurant from "./BottomRestaurant";

export default function Home({navigation}) {
    return (                      
            <>
                  
                <ScrollView style={styles.scrollstyle}>
                    <View style={styles.container}>
                        {/* <Opciones/> */}

                        <TouchableOpacity
            style={styles.Bottom}
            onPress={() => {
                navigation.navigate("Restaurantess");
            }}
        >
            <Image
                style={styles.imageBottom}
                source={require("../../../../assets/restaurant.png")}
            />
            <Text style={styles.textBottom}>Restaurante</Text>
        </TouchableOpacity>
                        <Text style={styles.texto}>Promociones</Text>
                    
                        <Text style={styles.texto}>Los mejores restaurantes</Text>
                        <Tiendas />
                    </View>           
                </ScrollView>       
         </>                     
    );
}

const styles = StyleSheet.create({
   texto: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal:15,
        marginTop: 20,
        marginBottom: 20,
        color: "#6D6D6D",    
    }, 
    Bottom: {
        backgroundColor: '#C3685E',
        marginHorizontal: 15,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
        marginTop: 15,
    },
    textBottom: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 5,
    },
    imageBottom: {
        width: 45,
        height: 45,
    }
});