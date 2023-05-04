import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function BottomRestaurant({navigation}) {
    return (
        <View>
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
        </View>
    );
}

const styles = StyleSheet.create({
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
