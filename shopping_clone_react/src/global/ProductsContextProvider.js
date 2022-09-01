import React, { createContext, useState } from "react";
import dslr from '../imageAssets/dslr.jpg';
import bag from '../imageAssets/bag.jpg';
import mobilephone from '../imageAssets/mobilephone.jpg';
import headephone from '../imageAssets/headphone.jpg';
import shoes from '../imageAssets/shoes.jpg';
import sunglass from '../imageAssets/sunglass.jpg';
import watch from '../imageAssets/watch.jpg';
import laptop from '../imageAssets/laptop.jpg';



export const productContext = createContext();

const ProductsContextProvider = (props) => {
    // useState hook
    let [products, setProducts] = useState([
        { id: 1, name: "Dslr", price: 200, image: dslr, status: "HOT" },
        { id: 2, name: "Bag", price: 100, image: bag, status: "NEW" },
        { id: 3, name: "Headphone", price: 500, image: headephone, status: "HOT" },
        { id: 4, name: "shoes", price: 700, image: shoes, status: "NEW" },
        { id: 5, name: "Mobile Phone", price: 5000, image: mobilephone, status: "HOT"},
        { id: 6, name: "Sunglass", price: 600, image: sunglass, status: "HOT"},
        { id: 7, name: "Watch", price: 400, image: watch, status: "NEW" },
        { id: 8, name: "Laptop", price: 40000, image: laptop, status: "HOT"}
    ]);
    return (
        <productContext.Provider value={products}>
            {props.children}
        </productContext.Provider>
    );
}

export default ProductsContextProvider;