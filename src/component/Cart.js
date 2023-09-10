import { useContext } from "react";
import { useSelector } from "react-redux";
import CartContext from "../utils/cartContext";
import ItemList from "./ItemList";
const Cart = (()=>{
    //GETTING VALUE FROM CONTEXT API
    // const {cartValue} = useContext(CartContext);

    // Getting value 
    const cartValue =  useSelector((store)=>{
        return store.cart.cartItems
    })
    return <>
    <div className="cat-container">
    <div className="body-container">
            <ItemList itemsList = {cartValue}/>
        </div>
        </div>
    </>
})
export default Cart;