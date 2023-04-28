import React from "react";
import { ScrollView, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const dataCarousel = [
    {
        name: "Pizza",
        image: require("../../../../assets/logoPizza.png")
    },
    {
        name: "Hamburguesa",
        image: require("../../../../assets/logoPizza.png"),
    },
    {
        name: "Pollo",
        image: require("../../../../assets/logoPizza.png"),
    },
    {
        name: "China",
        image: require("../../../../assets/logoPizza.png"),
    },
];

const ScrollViewHorizontal = () => {
    return (
       
    <>          
  <View style={styles.container}>
                    <TouchableOpacity>
                        <View style={styles.containerImage}>
       <Image source={require('../../../../assets/HamburIcon.png')} style={styles.Imagenes}/>
                        </View>
                        <View style={styles.containerCarouselText}>
                            <Text style={styles.textCarousel}>Hamburguesa</Text>
                        </View>
                        
                   </TouchableOpacity>
  </View>
  
  <View style={styles.container1}>
  <TouchableOpacity>
      <View style={styles.containerImage}>
<Image source={require('../../../../assets/pizzaIcon.png')} style={styles.Imagenes}/>
      </View>
      <View style={styles.containerCarouselText}>
          <Text style={styles.textCarousel}>Pizza</Text>
      </View>
      
  </TouchableOpacity>
</View>

<View style={styles.container2}>
  <TouchableOpacity>
      <View style={styles.containerImage}>
<Image source={require('../../../../assets/PolloIcon.png')} style={styles.Imagenes2}/>
      </View>
      <View style={styles.containerCarouselText}>
          <Text style={styles.textCarousel}>Pollo</Text>
      </View>
      
  </TouchableOpacity>
</View>

<View style={styles.container3}>
  <TouchableOpacity>
      <View style={styles.containerImage}>
<Image source={require('../../../../assets/pizzaIcon.png')} style={styles.Imagenes3}/>
      </View>
      <View style={styles.containerCarouselText}>
          <Text style={styles.textCarousel}>China</Text>
      </View>
      
  </TouchableOpacity>
</View>
</>
           
    );
};

const styles = StyleSheet.create({
    
    container: {
        width: "62%",
        height: 100,
        backgroundColor: "#C3685E",
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    containerCarouselText: {
        alignItems: 'center',
    },
    textCarousel: {
        color: "#000",
        marginTop: 5,
        paddingHorizontal: 14,
    },
    container1: {
        width: "30%",
        height: 90,
        backgroundColor: "#ED967C",
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 6,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
    },
    container2: {
        width: "30%",
        height: 90,
        backgroundColor: "#A7B972",
        borderRadius: 5,
        marginHorizontal: 138,
        marginTop: -100,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
    },
    container3: {
        width: "29%",
        height: 198,
        backgroundColor: "#EFBC69",
        borderRadius: 5,
        marginHorizontal: 262,
        marginTop: -208,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000000",
        shadowOffset: {
            width: -7,
            height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.05,
        elevation: 5,
        justifyContent: 'center',
    },
});

export default ScrollViewHorizontal;