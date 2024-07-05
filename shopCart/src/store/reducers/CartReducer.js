// src/store/reducers/CartReducer.js
// raw js code immutable logic
/*
const CartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const productIndex = state.findIndex(item => item.id === action.payload.id);
            console.log("Add to Cart Action Get", action);
            console.log("productIndex get ", productIndex);

            if (productIndex !== -1) {
                // The product already exists in the cart
                return state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                // The product does not exist in the cart, add new item
                return [...state, { ...action.payload, quantity: 1 }];
            }
        }
        
        case "REMOVE_TO_CART": {
            return state.filter((item) => item.id !== action.payload.id);
        }
        
        case "CLEAR_CART": {
            return [];
        }
        case "MODIFY_TO_CART": {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        }

        default:
            return state;
    }
};

export default CartReducer;
*/


//Redux toolkit Create Reduer=================
import {
    createReducer
} from '@reduxjs/toolkit'
import { addToCart,removeFromCart,clearCart,modifyCart } from '../actions-creator/CartAction';

export const CartReducer = createReducer([], (builder) => {
    builder
        .addCase(addToCart, (state, action) => {
            const product = state.find(item => item.id === action.payload.id);
            product ? product.quantity++ : state.push({
                ...action.payload,
                quantity: 1
            })
        })
        .addCase(removeFromCart, (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        })
        .addCase(modifyCart, (state, action) => {
            const product = state.find(item => item.id === action.payload.id);
            product ? product.quantity = action.payload.quantity : []
        })
        .addCase(clearCart, () => {
            return []
        })
})