import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Linking, } from "react-native";
import MapView, { Marker } from "react-native-maps";

import color from "../color";

const Products = ({ route, navigation }) => {
    //API
    const [productos, setProducts] = useState([]);
    const { restaurantId } = route.params;

    useEffect(() => {
        fetch(`https://yaa.onrender.com/api/restaurantes/${restaurantId}/menu`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    //Realiza la llamada hacia el restaurante
    const handleCall = ({ item }) => {
        Linking.openURL(`tel:${item.number}`);
    };

    //Mmanda la informacion a la pantalla de Details
    const handleItemPress = (item) => {
        navigation.navigate("Detalles", { item });
    };

    //Cabecera de la pantalla
    const headerItemScreen = ({ item }) => {
        return (
            <View style={styles.header}>
                <Image source={{uri:item.banner}} style={styles.banner} />
                <View style={styles.logo}>
                    <Image source={{uri:item.logo}} style={styles.imagelogo} />
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.info}>
                        <Text style={styles.nameInfo}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.bottomCall} onPress={handleCall} >
                        <Image source={require("../../../../assets/telephone.png")} style={styles.call} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    //Lista de los productos
    const renderMenuItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => handleItemPress(item)}>
                <Image source={{ uri: item.image }} style={styles.menuItemImage} />
                <View style={styles.menuItemInfo}>
                    <Text style={styles.menuItemName}>{item.name}</Text>
                    <Text style={styles.menuItemDescription}>{item.description}</Text>
                    <Text style={styles.menuItemPrice}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    //Muestra el codigo visual de {renderMenuItem} y de {headerItemScreen}
    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                /* ListHeaderComponent={headerItemScreen}  */
                renderItem={renderMenuItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
        borderWidth: 0.5,
        borderColor: "#c1c1c1",
    },
    containerInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 39,
        paddingHorizontal: 15,
    },
    nameInfo: {
        fontSize: 24,
        fontWeight: "bold",
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
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 39,
    },
    map: {
        width: "100%",
        height: 190,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#c1c1c1",
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
        paddingTop: "2.7%",
    },
    menuItemPrice: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: color.PrimaryColor,
    },
});

export default Products;
