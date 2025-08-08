import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (product) => {
       setCart(prevCart =>{
        const exists = prevCart.find(p => p.id === product.id);
        if (exists){
            return prevCart.map(p => p.id===product.id
                ? {...p, quantity:p.quantity + product.quantity}
                : p
            );
        }else{
            return[...prevCart, {...product}]
        }
       });
    };

    const totalQuantity = () =>{
        const total = cart.reduce((total, product) => total + product.quantity, 0)
        return total;
    }

    const totalPrice = () =>{
        const total = cart.reduce((total, product) =>total + (product.price * product.quantity), 0);
        return total;
    }

    const deleteProductById = (id) => {
        const productFilter = cart.filter((product) => product.id !== id);
        setCart(productFilter);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return (
       <CartContext.Provider value ={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
        {children}
       </CartContext.Provider> 
    )
};

export {CartContext, CartProvider};