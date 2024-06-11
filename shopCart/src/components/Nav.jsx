import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './../context/CartContext';

import { ReviewContext } from "../context/ReviewContext";

const Nav = () => {

    const{cart} = useContext(CartContext)
    const {review} =useContext(ReviewContext)
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
