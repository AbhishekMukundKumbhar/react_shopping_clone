import React, { useContext } from "react";
import { cartContext } from "../global/CartContextProvider";
// import StripeCheckout from "react-stripe-checkout";

const handleToken = (token)=>{

}

const ProductCart = () => {
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(cartContext);

    return (
        <div className="cart-container">
            <div className="cart-details">
                {shoppingCart.length > 0 ?
                    shoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-product-image"><img src={cart.image} alt="not found" /></span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">${cart.price}.00</span>
                            <span className="dec" onClick={()=>dispatch({type : 'DECREASE_QTY', id : cart.id, product : cart})}><i className="fa-solid fa-minus"></i></span>
                            <span className="cart-product-quantity">{cart.qty}</span>
                            <span className="inc" onClick={()=>dispatch({type : 'INCREASE_QTY', id : cart.id, product : cart})}><i className="fa-solid fa-plus"></i></span>
                            <span className="product-total-price">${cart.price * cart.qty}.00</span>
                            <span className="delete" onClick={()=>dispatch({type : 'DELETE_CART', id : cart.id, product : cart})}><i className="fa-solid fa-trash"></i></span>
                        </div>
                    ))
                    : <div className="empty-cart"><h3>Sorry your cart is empty..!</h3></div>}
            </div>
            {shoppingCart.length>0 
            ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart summary</h3>
                    <div className="total-sec">
                        <div className="items-title">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-sec">
                    <div className="items-title">Total price</div>
                        <div className="items-count">${totalPrice}.00</div>
                    </div>
                    <div className="stripe-section">
                        {/* <StripeCheckout
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={totalPrice*100}
                        name = "Payment"
                        ></StripeCheckout> */}
                        <button className="payment-btn">Payment</button>
                    </div>

                </div>

            </div>
             :''}
        </div>
    )
}

export default ProductCart;