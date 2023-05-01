import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
//importaciones de componentes
import Tiendas from "./Tiendas";

import Opciones from "./Opciones"
import Restaurant from "../RestaurantScreen/Restaurant";
import RestaurantNavigation from "../../Navigation/RestaurantNavigation";

export default function Home({navigation}) {
    return (                      
            <>
            <StatusBar/>      
                <ScrollView style={styles.scrollstyle}>
                    <View style={styles.container}>
                        <Opciones/>
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
});