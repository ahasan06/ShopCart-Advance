
import { createContext, useEffect, useReducer } from "react";
import { CartReducer } from './../reducer/CartReducer';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const getcart = JSON.parse(localStorage.getItem('LocalStorageCart')||[])
    const [cart, dispatch] = useReducer(CartReducer, getcart);

    useEffect(() => {
        localStorage.setItem('LocalStorageCart', JSON.stringify(cart));
    }, [cart]);


    return (
        <CartContext.Provider value={({ cart, dispatch })}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;