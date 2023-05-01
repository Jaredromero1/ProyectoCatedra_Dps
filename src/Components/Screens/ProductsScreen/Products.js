import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

/* importacion de componentes */
import ListaProductos from '../ProductsScreen/Food'

export default function Products() {
    return (
        <ScrollView style={styles.scrollstyle}>
            <View style={styles.Container}>
                {/* imagen, info y contacto de restaurante */}

                {/* Ubicacion */}
                  
                {/* lista de productos */}
                <ListaProductos />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
