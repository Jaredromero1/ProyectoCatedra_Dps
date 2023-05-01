import { StyleSheet, Text, View, TouchableOpacit, ScrollView } from "react-native";
import React from "react";

//Importacion de pantallas
import Tiendas from "../HomeScreen/Tiendas";

export default function Restaurant({ navigation }) {
    return (
        <ScrollView style={styles.scrollstyle}>
            <View style={styles.container}>
                <Tiendas />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#eee",
        shadowOffset: {
            width: -8,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 0,
        width: "100%",
    },
    scrollstyle: {
        paddingVertical: 15
    }
});
