import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
//importaciones de componentes
import Tiendas from "./Tiendas";
import Promociones from "./Promociones";

export default function Home({ navigation }) {
    return (
        <>
            <StatusBar />
            <ScrollView style={styles.scrollstyle}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Bottom} onPress={() => {navigation.navigate("Restaurantes");}}>
                        <Image style={styles.imageBottom} source={require("../../../../assets/store.png")} />
                        <Text style={styles.textBottom}>RESTAURANTES</Text>
                    </TouchableOpacity>
                    <Text style={styles.texto}>Promociones</Text>
                    <Promociones />
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
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 20,
        color: "#6D6D6D",
    },
    Bottom: {
        backgroundColor: "#FFAA21",
        flexDirection: 'row',
        marginHorizontal: 15,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: -1,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
        marginTop: 15,
    },
    textBottom: {
        color: "#000",
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    imageBottom: {
        width: 25,
        height: 25,
        marginRight: 15, 
    },
});
