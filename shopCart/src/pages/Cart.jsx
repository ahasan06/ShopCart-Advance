// import { useContext } from "react";
// import { CartContext } from './../context/CartContext';
import CartItem from "../components/CartItem";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../store/actions-creator/CartAction";


const Cart = () => {

    // const {cart,dispatch} = useContext(CartContext)
    const cart = useSelector(storeState=>storeState.cart)
    const dispatch = useDispatch()

    let totalcart  = cart.reduce((acc,item)=>acc + item.quantity * item.price, 0)
    const clearCartHandler =()=>{
        dispatch(clearCart())
    }

    return (
        <>
            <div className="cart-container">
                <h4 className="cart-title">Product list in your cart</h4>
                <div className="cart-table-container">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {cart.map(item => (
								
								<CartItem item={item} key={item.id} />
							))
							
							}
					

                        </tbody>
                    </table>
                </div>
                <h2 className="total-price">Your Total Price Will be $ {totalcart}</h2>
                <div className="cart-actions">
                    <button onClick={clearCartHandler} className="clear-cart-btn">
                        Clear Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;