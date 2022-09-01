import { toast } from "react-toastify";
export const cartReducer = (state, action) => {
    let { shoppingCart, qty, totalPrice } = state;
    let index;
    let updatedQty;
    let updatedPrice;
    let product;
    switch (action.type) {
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id);
            if (check) {
                toast.warning("product is already present in your cart");
                return state;
            } else {
                product = action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                toast.success("successfully added product in cart",{position: "top-right"});
                return { shoppingCart: [...shoppingCart, product], qty: updatedQty, totalPrice: updatedPrice };
            }
            break;
        case 'INCREASE_QTY':
            product = action.product;
            index = shoppingCart.indexOf(product);
            product.qty = product.qty + 1;
            shoppingCart[index] = product;
            updatedQty = qty + 1;
            updatedPrice = totalPrice + product.price;
            toast.info("increased quantity of product in cart");
            return { shoppingCart: [...shoppingCart], qty: updatedQty, totalPrice: updatedPrice };
            break;
        case 'DECREASE_QTY':
            product = action.product;
            if (qty > 1 && product.qty > 1 && totalPrice > product.price) {
                index = shoppingCart.indexOf(product);
                product.qty = product.qty - 1;
                shoppingCart[index] = product;
                updatedQty = qty - 1;
                updatedPrice = totalPrice - product.price;
                // add toast successfully decreased quantity of product in cart
                toast.warning("decreased quantity of product in cart");
                return { shoppingCart: [...shoppingCart], qty: updatedQty, totalPrice: updatedPrice };
            }
            else {
                toast.warning("only one item is there if you want to remove click on delete");
                return state;
            }
            break;
        case 'DELETE_CART':
            shoppingCart = shoppingCart.filter(cart => cart.id !== action.id);
            product = action.product;
            updatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.price * product.qty;
            toast.error("deleted product from cart");
            return { shoppingCart: [...shoppingCart], qty: updatedQty, totalPrice: updatedPrice };
            break;
        default:
            return state;
    }


}