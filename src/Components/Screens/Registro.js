import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity,} from "react-native";

export default function Registro({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRARSE</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.buttonContainer}>     
                <TouchableOpacity style={styles.button} title="Registrarse" onPress={()=>{navigation.navigate('drawer');}}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => { navigation.navigate('Login');}}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8F161C",
        padding: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 35,
        color: "white",
       
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#470B0E",
        borderRadius: 5,
        marginTop: 20,
        marginRight: "5%",
        width: "45%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: "#470B0E",
        borderRadius: 5,
        marginTop: 20,
        marginLeft: "5%",
        width: "45%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
