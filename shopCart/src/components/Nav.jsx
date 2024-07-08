// import { useContext } from "react";
// import { CartContext } from './../context/CartContext';
// import { ReviewContext } from "../context/ReviewContext";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
    // const{cart} = useContext(CartContext)
    // const {review} =useContext(ReviewContext)
    const cart  = useSelector(ourStore=>ourStore.cart)
    const review = useSelector(storeState=>storeState.review)
    return (
        <>
            <div className="header__title">
                <h4>Routing | Reducer | Context API | JSON</h4>
            </div>
            <header className="header">
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/addProduct" className="nav__link">Add Product</Link>
                        </li> 
                        <li className="nav__item">
                            <Link to="/allProduct" className="nav__link">All Product</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/post" className="nav__link">Post</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/user" className="nav__link">User</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/counter" className="nav__link">Counter</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/review" className="nav__link">Page Review <span> ({review.length})</span></Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/cart" className="nav__link">Cart <span>({cart.length})</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
