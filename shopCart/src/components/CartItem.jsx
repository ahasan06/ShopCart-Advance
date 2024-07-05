/* eslint-disable react/prop-types */

import {useState } from 'react';
import {useDispatch } from "react-redux";
// import { useContext, useState } from 'react';
// import { CartContext } from './../context/CartContext';
const CartItem = ({item}) => {
    // const {dispatch} = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    const dispatch = useDispatch()


    const inputOnChange=(e)=>{
        if (Number(e.target.value)<1) {
            alert("Cant Insert Unreal value")
        }
        else{
        dispatch({
            type: "MODIFY_TO_CART",
            payload: {
                id: item.id,
                quantity: Number(e.target.value),
            }
        })
        setItemQuantity(Number(e.target.value));
    }
    }

    const removeCartHandler = () => {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: item
        })
    }

    const inCreaseHandler =()=>{
        setItemQuantity(itemQuantity+1);
        dispatch({
            type: "MODIFY_TO_CART",
            payload: {
                id: item.id,
                quantity: itemQuantity + 1
            }
        })
    }

    const decreaseHandler=()=>{

        if (itemQuantity>1) {
            
            setItemQuantity(itemQuantity-1);
            dispatch({
                type: "MODIFY_TO_CART",
                payload: {
                    id:item.id,
                    quantity:itemQuantity-1
                }
            })
        }
        else{
            dispatch({
                type: "REMOVE_TO_CART",
                payload: item
            })
        }
    }



    return (
        <tr>
            <td>
                <div className="product">
                    <img
                    src={item.image}
                    />
                </div>
            </td>
            <td>
                <p>{item.name}</p>
            </td>
            <td>$ {item.price} </td>
            <td>
                <div className="qty_input">
                    <button
                        className="qty-count qty-count--minus"
                        onClick={decreaseHandler}
                    >
                        <figure>-</figure>
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        value={itemQuantity}
                        min="1"
                        onChange={inputOnChange}
                    />
                    <button
                        className="qty-count qty-count--add"
                        onClick={inCreaseHandler}
                    >
                        <figure>+</figure>
                    </button>
                </div>
            </td>
            <td>${item.quantity*item.price}</td>
            <td>
                <button className="cross-icon"
                onClick={removeCartHandler}
                >
                    x
                </button>
            </td>
        </tr>
    );
};

export default CartItem;