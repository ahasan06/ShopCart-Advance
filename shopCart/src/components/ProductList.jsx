/* eslint-disable react/prop-types */
// import { useDispatch } from "react-redux";
// import { removeProduct } from "../store/reducers/ProductReducer";
import { useRemoveProductMutation } from "../store/features/apiSlice";
const ProductList = ({ prod }) => {
    // const dispatch = useDispatch()
    const [deleteProd] = useRemoveProductMutation()

    const removeHandler =()=>{
      
        deleteProd(prod.id)
        // dispatch(removeProduct(prod.id))
    }

    return (
        <div className="cart-item">
            <img src={prod.image} alt="Product Name" className="cart-item__image" />
            <div className="cart-item__details">
                <h4 className="cart-item__title">{prod.name}</h4>
                <p className="cart-item__price">${prod.price}</p>
            </div>
            <div className="cart-item__actions">

                <button className="button cart-item__button button--alt" onClick={removeHandler} >Remove Product</button>

            </div>
        </div>
    );
};

export default ProductList;