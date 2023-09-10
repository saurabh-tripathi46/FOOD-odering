import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../utils/cartContext";
import { useSelector } from "react-redux";
const HeaderComponent = ()=>{
    // const {cartValue} = useContext(CartContext);
    const cartValue =  useSelector((store)=>{
    return store.cart.cartItems
    })
    return <div className='header-container'>
        <div className='logo-container'>
            <img className='logo' alt='food-order' src = 'https://www.pngitem.com/pimgs/m/69-694729_91-93-online-food-ordering-logo-hd-png.png'>
            </img>
        </div>
        <div className='nav-container'>
            <ul className='list-container'>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                   <Link to = '/about'>About Us</Link> 
                </li>
                <li>
                    <Link to = '/cart'>
                    Cart ({cartValue?.length})
                    </Link>
                   
                </li>
            </ul>
        </div>
    </div>
}

export default HeaderComponent;