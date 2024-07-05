/* eslint-disable react/prop-types */
// import { useContext, useState } from 'react';
// import { CartContext } from './../context/CartContext';

import {useState } from 'react';
import {useDispatch } from "react-redux";
import { modifyCart, removeFromCart } from '../store/actions-creator/CartAction';
const CartItem = ({item}) => {
    // const {dispatch} = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    const dispatch = useDispatch()


    const inputOnChange=(e)=>{
        const newQuantity = Number(e.target.value)
        if (Number(e.target.value)<1) {
            alert("Cant Insert Unreal value")
        }
        else{   
        dispatch(modifyCart(item.id, newQuantity));
        setItemQuantity(Number(newQuantity));
    }
    }

    const removeCartHandler = () => {
        dispatch(removeFromCart(item))
    }

    const inCreaseHandler =()=>{
        const newQuantity = itemQuantity + 1;
        setItemQuantity(newQuantity);
        dispatch(modifyCart(item.id, newQuantity));
    }

    const decreaseHandler=()=>{
        const newQuantity = itemQuantity-1;
        if (itemQuantity>1) {
            setItemQuantity(itemQuantity-1);
            dispatch(modifyCart(item.id,newQuantity))
        }
        else{
            dispatch(removeFromCart(item))
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