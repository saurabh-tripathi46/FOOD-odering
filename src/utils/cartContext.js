import { createContext, useState } from "react";

const CartContext = createContext({
    cartValue: [],
    addCart: (item)=>{
    },
    removeFromCart: (item)=>{

    }
});

export const CartContextProvider = ({children})=>{
    const addToCartHandler = (item)=>{
        setCartValue([...cartValue, item])
    }
    const removeFromCartHandler = (item)=>{
        const filterList =  cartValue.filter((itm)=>{
            return itm.card.info.id !== item.card.info.id
            })
            setCartValue([...filterList])
    }
    const [cartValue, setCartValue] = useState([])
return <CartContext.Provider value = {{cartValue, setCartValue, addCart: addToCartHandler, removeFromCart: removeFromCartHandler}}>
    {children}
</CartContext.Provider>
}

export default CartContext;