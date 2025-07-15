const products = [
    {
        id: 1,
        name: "Unicornio",
        description: "Relleno de redvelvet y cobertura de chocolate blanca",
        price: 6000,
        stock: 20,
        image: "/img/unicornio.jpg",
        category: "personalizados"
    },
     {
        id: 2,
        name: "Doña Florinda",
        description: "Relleno de chocolate, cobertura de chocolate blanca, con un toque de masmelos.",
        price: 6000,
        stock: 7,
        image: "/img/doña_florinda.jpg",
        category: "personalizados"
    },
     {
        id: 3,
        name: "Felices Pascuas",
        description: "Relleno de redvelvet, chocolate y vainilla con cobertura de chocolate, y almendras.",
        price: 5500,
        stock: 10,
        image: "/img/felices_pascuas.jpg",
        category: "temporada"
    },
     {
        id: 4,
        name: "Renos Navideños",
        description: "Relleno de chocolate,cobertura de chocolate oscuro, sparkies.",
        price: 5500,
        stock: 25,
        image: "/img/reno_navideño.jpg",
        category: "temporada"
    },
     {
        id: 5,
        name: "Festival de colores",
        description: "Relleno de morazul, cobertura a base de chocolate blanco, grageas de colores.",
        price: 5200,
        stock: 50,
        image: "/img/festival_de_colores.jpg",
        category: "siempre"
    },
     {
        id: 6,
        name: "Pastel redondo",
        description: "Relleno de redvelvet, cobertura a base de chocolate blanco, grageas de colores.",
        price: 5200,
        stock: 20,
        image: "/img/pastel_redondo.jpg",
        category: "siempre"
    }
]

const getProducts =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        }, 3000);
    });
};

const getProductById =(productId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const product = products.find((product)=> products.id === Number(productId));
            resolve(product);
        },3000);
    })
}

export {getProducts, getProductById};