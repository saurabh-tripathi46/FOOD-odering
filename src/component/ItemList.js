import { useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import CartContext from "../utils/cartContext"
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({itemsList, setCategoryList = null})=>{
    const dispatch =  useDispatch();
    const {cartValue, setCartValue, addCart, removeFromCart} = useContext(CartContext);
    function addToCart(index, item){
        const deepCopy = JSON.parse(JSON.stringify(itemsList))
        if(!deepCopy[index]['isAddedToCart']){
            deepCopy[index]['isAddedToCart'] = true
            item = {...item, isAddedToCart: true}
            //  - >>>  adding to cart by context api
            // addCart(item) 
            dispatch(addItem(item))
        } else{
           deepCopy[index]['isAddedToCart'] = false
           item = {...item, isAddedToCart: false}
            //  - >>>  removing to cart by context api
        //    removeFromCart(item)
        dispatch(removeItem(item))
        }
        if(setCategoryList){
            setCategoryList(deepCopy)
        }
       
        // setItemsList(deepCopy)
    }
    const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'
    console.log("qwert",itemsList)
    return <div className="item-list-container">
        {itemsList?.map((item, index)=>{
            return <div  className="item-list-wrapper" key = {index}>
                <div  className="details-container"> 
                <span className="title">
                {item?.card?.info?.name}
                </span>
                <span className="price">
                ₹ {item?.card?.info?.price}
                </span>
              <span className="description">
                {item?.card?.info?.description}
              </span>
                </div>
                <div className="img-container">
                    <img className="img" src = {`${IMG_URL}${item?.card?.info?.imageId}`}>
                    </img>
                    <button onClick={()=>{
                        addToCart(index, item)
                    }} className="add-button">
                       {item?.isAddedToCart ? 'Remove' : 'Add' } 
                    </button>
                </div>
               
                 </div>
        })}
    </div>
}

export default ItemList;