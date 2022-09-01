import React, { useContext } from "react";
import { cartContext } from "../global/CartContextProvider";

const DailogBox = (props) => {
    const {dispatch} = useContext(cartContext);
    const product = props.product;
    const setDetailProduct = props.setDetailProduct;

    const positiveBtnHandler = ()=>{
        dispatch({type : 'ADD_TO_CART', id:product.id, product});
        setDetailProduct({showDetail : false});
    }
    return (
        <div className="dailogbox-conatiner">
            <div className="dailog-box">
                <div className="detail-title">{product.name}</div>
                <div className="imag-conatiner">
                {product.status === 'HOT' ? <div className="detail-hot">HOT</div> : ''}
                {product.status === 'NEW' ? <div className="detail-new">NEW</div> : ''}
                    <img src={product.image} alt="not found" />
                </div>
                <div className="detail-price">${product.price}.00</div>
                <div className="button-container">
                    <div className="positive-btn" onClick={()=>positiveBtnHandler()}>Add to cart</div>
                    <div className="negative-btn" onClick={()=>setDetailProduct({showDetail : false})}>Cancel</div>
                </div>
                
            </div>
        </div>
    )
}

export default DailogBox;