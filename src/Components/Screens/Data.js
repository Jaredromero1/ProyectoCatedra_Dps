export default[
    {
        id: "1",
        name: "McDonalds",
        description: "HAMBURGUESA",
        number: '25099999',
        latitud: 13.6987885,
        longitud: -89.1517729,
        logo: require("../../../assets/logoMC.png"),
        banner: require("../../../assets/MCimg.png"),
        menu: [
            {
                id: 1,
                name: "Big Mac",
                description: "Soda lata 355ml y papas medianas",
                price: (7.35).toFixed(2),
                image: require("../../../assets/Comida/McDonald/BigMac.jpg")
            },
            {   
                id: 2,
                name: "Triple Bacon",
                description: "Soda lata 355ml y papas medianas",
                price: (7.00).toFixed(2),
                image: require("../../../assets/Comida/McDonald/TripleBacon.jpg")
            },
            {
                id: 3,
                name: "Quesoburguesa Doble",
                description: "Soda lata 355ml y papas medianas",
                price: (6.45).toFixed(2),
                image: require("../../../assets/Comida/McDonald/QuesoDoble.jpg")
            },
            {
                id: 4,
                name: "Big Tasty",
                description: "Soda lata 355ml y papas medianas",
                price: (7.74).toFixed(2),
                image: require("../../../assets/Comida/McDonald/BigTasty.jpg")
            }
        ],
        Ubicacion: [
            {
                id: 1,
                name: "McDonalds",
                category: 'Restaurant',
            },
        ]
    },
    {
        id: "2",
        name: "Pizza Hut",
        description: "PIZZA",
        number: '22577777',
        latitud: 13.7158175,
        longitud: -89.1504684,
        logo: require("../../../assets/logoPizza.png"),
        banner: require("../../../assets/Pizza.png"),
        menu: [
            {
                id: 1,
                name: "Banquete Pizza Especialidad",
                description: "Pizza de Especialidad más un complemento",
                price: 15.95,
                image: "../../../../assets/"
            },
            {
                id: 2,
                name: "Banquete Hut Cheese",
                description: "Pizza Hut Cheese (Orilla rellena de quezo mozzarella)",
                price: 18.00,
                image: "../../../../assets/"
            },
            {
                id: 3,
                name: "Dúo de Pizzas Grandes",
                description: "2 Pizzas Grandes de 8 porciones cada una",
                price: 22.00,
                image: "../../../../assets/"
            },
            {
                id: 4,
                name: "Banquete Pizza Ingrediente",
                description: "Pizza de 1 Ingrediente más un complemento",
                price: 14.00,
                image: "../../../../assets/"
            }
        ],
        Ubicacion: [
            {
                id: 2,
                name: "Pizza Hut",
                category: 'Restaurant',
            },
        ]
    },
    {
        id: "4",
        name: "Burguer King",
        description: "HAMBURGUESA",
        number: '22080846',
        latitud: 13.7153193,
        longitud: -89.1435663,
        logo: require("../../../assets/burguerlogo.png"),
        banner: require("../../../assets/burgerKing.jpg"),
        menu: [
            {
                id: 1,
                name: "Whopper",
                description: "Carne de res 4 oz. Asada a la parrilla y frescos vegetales.",
                price: 6.99,
                image: "../../../../assets/"
            },
            {
                id: 2,
                name: "Whopper doble",
                description: "8 oz. De carne de res asada a la parrilla y frescos vegetales.",
                price: 7.99,
                image: "../../../../assets/"
            },
            {
                id: 3,
                name: "Big King",
                description: "Doble carne de res 2oz. Queso americano, nuestra salsa stacker y vegetales.",
                price: 4.99,
                image: "../../../../assets/"
            },
            {
                id: 4,
                name: "SteakHouse",
                description: "Carne de res de 7 oz. Asada a la parrilla, queso americano, cebolla crispy y vegetales",
                price: 8.99,
                image: "../../../../assets/"
            }
        ],
        Ubicacion: [
            {
                id: 4,
                name: "Burguer King",
                category: 'Restaurant',
            },
        ]
    },
    {
        id: "3",
        name: "China Wok",
        description: "COMIDA CHINA",
        number: '25007777',
        latitud: 13.7158175,
        longitud: -89.1504684,
        logo: require("../../../assets/logoChina.png"),
        banner: require("../../../assets/china.png"),
        menu: [
            {
                id: 1,
                name: "Combinación 2 sabores de Pollo",
                description: "Incluye dos sabores de pollo, un pan, un wantán y bebida.",
                price: 8.25,
                image: "../../../../assets/"
            },
            {
                id: 2,
                name: "Combinación 2 sabores de Pollo y Carne",
                description: "Incluye una especialidad de carne y una de pollo, un pan, un wantán y bebida.",
                price: 8.50,
                image: "../../../../assets/"
            },
            {
                id: 3,
                name: "Combo Sopa Mein Lomito 24oz",
                description: "Combo Sopa Mein Lomito 24oz",
                price: 5.50,
                image: "../../../../assets/"
            },
            {
                id: 4,
                name: "Pollo Favoritos",
                description: "Incluye especialidad de pollo que más te guste, un pan, un wantán y bebidas",
                price: 6.75,
                image: "../../../../assets/"
            }
        ],
        Ubicacion: [
            {
                id: 3,
                name: "China Wok",
                category: 'Restaurant',
            },
        ]
    },
];