import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
import { useState } from "react";
const RestaurantList = ()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList)
    return  <div className='list-container'>
        <button onClick = {()=>{
            const filterList = listOfRestaurant.filter((item)=>{
                return item.avgRating>4
            })
            setListOfRestaurant(filterList);
        }} >Filter Restaurant</button>
         {listOfRestaurant.map((item, index)=>{
         return <RestaurantCard avgRating = {item.avgRating}
         cuisines = {item.cuisines}
         veg = {item.veg}
         name = {item.name}
         cloudinaryImageId = {item.cloudinaryImageId}
         key = {index}
         />
     })}
     </div>
    
 }

 export default RestaurantList;