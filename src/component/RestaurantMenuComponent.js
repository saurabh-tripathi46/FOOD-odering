import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuComponent = ()=>{
    const {id} = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [vegOnlyCb, setVegOnlyCb] = useState(false);
    const [filterByVeg, setFilterByVeg] = useState([]);
    const [showIndex, setShowIndex] = useState(null);
    const restaurantMenuInfo =  useRestaurantMenu(id);
    const restaurantDetails = restaurantMenuInfo?.data?.cards[0]?.card?.card?.info;
    const restaurantMenuList = restaurantMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategoriesList =  restaurantMenu?.filter((item)=>{
        return item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    useEffect(()=>{
        setRestaurantInfo(restaurantDetails);
        setRestaurantMenu(restaurantMenuList);
        setFilterByVeg(restaurantMenuList)
    }, [restaurantMenuInfo]);
  
    const isNonVeg = restaurantMenu?.filter((item)=>{
        return item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge' && item?.card?.card.vegOnlyDetails.imageId
    });

    console.log("categoriesList",itemCategoriesList)
    return <div className="menu-container">
        <div className="restaurant-info">
            <div className="restaurant-name-info">
                <p className="name">
                    {restaurantInfo?.name}
                </p>
                <p className="cuisines">
                {restaurantInfo?.cuisines.join(', ')}
                </p>
                <p className="area">
                {restaurantInfo?.areaName}
                </p>
            </div>
            <div className="rating-container">
                <div className="rating-container-wrapper">
                <p className="avg-rating">
                    {restaurantInfo?.avgRating}
                </p>
                <p>
                    {restaurantInfo?.totalRatingsString}
                </p>
                </div>
            </div>
        </div>
        {isNonVeg ? <div className="only-veg-cb">
                                <label>Veg Only</label>
                                <input checked = {vegOnlyCb}  onChange= {(e)=>{
                                    setVegOnlyCb(e.target.checked);
                                    console.log(vegOnlyCb)
                                    if(e.target.checked){
                                        const deepCopy = JSON.parse(JSON.stringify(itemCategoriesList))
                                        deepCopy.forEach((item, index)=>{
                                               const filterItem = item.card.card.itemCards.filter((itemCard)=>{
                                                return itemCard.card.info.isVeg
                                               }) 
                                               return item.card.card.itemCards = filterItem;
                                            
                                        })
                                        setRestaurantMenu(deepCopy);
                                    }else {
                                        setRestaurantMenu(filterByVeg);
                                    }
                                }} type= 'checkbox'/>
                                </div> : null}
        <div className="items-container">
            <div className="items-container-wrapper">
                {itemCategoriesList?.map((item, index)=>{
                    return <RestaurantCategory showIndex = {showIndex === index  ? true : false} setShowIndex = {()=>{
                        if(showIndex === index){
                            setShowIndex(null)
                        }else {
                            setShowIndex(index)
                        }
                        
                    }} key = {index} data = {item} />
                })}

            </div>
        </div>

    </div>
}

export default RestaurantMenuComponent;