// raw react redux

/*
export const addToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload
    };
};

export const removeFromCart = (payload) => {
    return {
        type: "REMOVE_TO_CART",
        payload: payload
    };
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};

export const modifyCart = (payloadId,quantity) => {
    return {
        type: "MODIFY_TO_CART",
        payload: {
            id: payloadId,
            quantity: quantity,
        }
    };
};
*/

//Redux toolkit Create Action
/*
import { createAction} from '@reduxjs/toolkit'
export const addToCart = createAction("ADD_TO_CART");
export const removeFromCart = createAction("REMOVE_TO_CART");
export const clearCart = createAction("CLEAR_CART");
export const modifyCart = createAction("MODIFY_TO_CART");
*/

// CreatSlice Actions ================

import {
    addToCart,
    removeFromCart,
    modifyCart,
    clearCart
} from "../reducers/CartReducer";

export {
    addToCart,
    removeFromCart,
    modifyCart,
    clearCart
}