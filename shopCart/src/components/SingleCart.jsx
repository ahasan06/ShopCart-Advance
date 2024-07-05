/* eslint-disable react/prop-types */
// import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

import { useSelector,useDispatch } from "react-redux";

const SingleCart = ({ prod }) => {
    // const { cart, dispatch } = useContext(CartContext);

    const cart =  useSelector(storeState=>storeState.cart)
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: prod,
        });
        console.log("Send Prod to reducer", prod);
    };

    const removeToCartHandler = () => {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: prod,
        });
        console.log("Send Prod to reducer", prod);
    };

    const isInCart = cart.some(item => item.id === prod.id);


    return (
        <div className="cart-item">
            <img src={prod.image} alt="Product Name" className="cart-item__image" />
            <div className="cart-item__details">
                <h4 className="cart-item__title">{prod.name}</h4>
                <p className="cart-item__price">${prod.price}</p> 
            </div>
            <div className="cart-item__actions">
                {isInCart ? (
                    <button className="button cart-item__button button--alt" onClick={removeToCartHandler}>Remove from Cart</button>
                ) : (
                    prod.available ? (
                        <button className="button cart-item__button" onClick={addToCartHandler}>Add to Cart</button>
                    ) : (
                        <button className="button--alt button--outOfStock" disabled>Out Of Stock</button>
                    )
                )}
                <Link key={prod.id} to={`/product/${prod.id}`}><button className="button cart-item__button">Product Details</button></Link>
            </div>
        </div>
    );
};

export default SingleCart;
