import React, { useContext, useState } from "react";
import { productContext } from "../global/ProductsContextProvider";
import { cartContext } from "../global/CartContextProvider"; 
import Banner from "./Banner";
import DailogBox from "./DailogBox";


const Products = () => {
    const data = useContext(productContext);
    const {dispatch} = useContext(cartContext);
    var [detailProduct, setDetailProduct] =useState({
        showDetail : false,
        product : {}
    })
    return (
        <div className='container'>
            <Banner/>
            <div className="products">
                {
                    data.map((product) => (
                        <div className="product" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt="Not found" onClick={()=>setDetailProduct({showDetail : true, product:product})}/>
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    ${product.price}.00
                                </div>
                            </div>
                            <div className="add-to-cart" onClick={()=>dispatch({type : 'ADD_TO_CART', id:product.id, product})}>Add to cart</div>
                            {product.status === 'HOT' ? <div className="hot">HOT</div> : ''}
                            {product.status === 'NEW' ? <div className="new">NEW</div> : ''}
                        </div>
                    ))
                }
            </div>
            {detailProduct.showDetail
            ?<DailogBox product = {detailProduct.product} setDetailProduct = {setDetailProduct}/>
            :''}
        </div>
    );
}

export default Products;