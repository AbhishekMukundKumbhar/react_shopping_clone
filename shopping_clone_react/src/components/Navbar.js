import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import {cartContext} from "../global/CartContextProvider";

const Navbar = () =>{
    const {qty} = useContext(cartContext);
    return(
        <nav>
            <ul className="left">
                <li>
                    <Link to ="/">AMKmart</Link>
                </li>
            </ul>
            <ul className="right">
                <li>
                    <Link to ="/cart">
                        <span className="shoppingCart"><i className="fa-solid fa-cart-plus"></i></span>
                        <span className="cartCount">{qty}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;