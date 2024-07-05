// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import { useSelector,useDispatch } from "react-redux";

const ProdDetailsCard = ({ product }) => {

    // const {cart,dispatch} = useContext(CartContext)
    const cart = useSelector(storeState=>storeState.cart)
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
    };

    const removeToCartHandler = () => {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: product,
        });
    };

    const isIncart  = cart.some(item=>item.id === product.id);

    return (
        <div className="product-details-card">
            <div className="card-image-container">
                <img src={product.image} alt={product.title} className="card-image" />
            </div>

            <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-price">Price: ${product.price}</p>
                <p className="card-description">{product.description}</p>
                <p className="card-longDescription">{product.longDescription}</p>
                <p className={`${ product.available ? "In_Stock" : "Out_ofStock"}`}><span> Availability: </span>{product.available ? "In Stock" : "Out of Stock"}</p>
                {
                     isIncart ? (
                        <button className="button cart-item__button button--alt" onClick={removeToCartHandler}>Remove from Cart</button>
                    ) : (
                        product.available ? (
                            <button className="button cart-item__button" onClick={addToCartHandler}>Add to Cart</button>
                        ) : (
                            <button className="button--alt button--outOfStock" disabled>Out Of Stock</button>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ProdDetailsCard;
