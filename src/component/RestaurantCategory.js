import ItemList from "./ItemList"
import { useState } from "react"
const RestaurantCategory = ({data, showIndex, setShowIndex})=>{
    const title = data?.card?.card?.title;
    const categoryList = data?.card?.card?.itemCards;
    const [itemsList, setCategoryList] = useState(categoryList);
    function handleClick(){
        setShowIndex();
    }
    return <div  className="cat-container">
        {itemsList.length ? <div onClick={handleClick} className="category-header-container">
            <span className="title"> {title} ({itemsList.length})</span>
           <span>
            {!showIndex ? '+' : '-'}
           </span>
        </div>: null}
        <div className="body-container">
            {showIndex ? <ItemList setCategoryList = {setCategoryList} itemsList = {itemsList}/>: null}
        </div>
    </div>
}

export default RestaurantCategory;