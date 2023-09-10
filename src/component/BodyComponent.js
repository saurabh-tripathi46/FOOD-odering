import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BodyComponent = ()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filterList, setFilterList] = useState([])
    useEffect(()=>{
        const loadList = async ()=>{
        const swiggy = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9260102&lng=77.6708967&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const result = await swiggy.json();
        const restaurantList = result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurantList)
        setListOfRestaurant(restaurantList);
        setFilterList(restaurantList);
        }
        loadList()
    }, []);
    if(!listOfRestaurant?.length){
        return <div>
            <h1>
                Loading.....
            </h1>
        </div>
    }
    return  <div className=''>
        <input onInput = {(e)=>{
            setSearchInput(e.target.value); 
            const filterList = listOfRestaurant.filter((item)=>{
                return item.info.name.includes(e.target.value)
            });
            setFilterList(filterList);
        }} value = {searchInput} type="text"/>
        <button onClick = {()=>{
            const filterList = listOfRestaurant.filter((item)=>{
                return item.info.avgRating>4
            })
            setFilterList(filterList);
        }} >Filter Restaurant</button>
        <div className='list-container'>
        {filterList?.map((item, index)=>{

         return <Link to = {`/restaurants/${item.info.id}`} key = {index} className="card-wrapper">
         <RestaurantCard avgRating = {item.info.avgRating}
         cuisines = {item.info.cuisines}
         veg = {item.info.veg}
         name = {item.info.name}
         cloudinaryImageId = {item.info.cloudinaryImageId}
         />
         </Link>
          
     })}
        </div>
        
     </div>
    
 }

 export default BodyComponent;