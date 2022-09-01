import React,{createContext, useReducer} from "react";
import { cartReducer } from "./cartReducer";

export const cartContext = createContext();

const CartContextProvider = (props) =>{
    let [cart, dispatch] = useReducer(cartReducer,{shoppingCart:[],qty:0,totalPrice:0});
    return(
        <cartContext.Provider value={{...cart,dispatch}}>
            {props.children}
        </cartContext.Provider>
    )
}
export default CartContextProvider;