import { useEffect, useState } from "react"
const useRestaurantMenu = (id)=>{
    const [restaurantMenuInfo, setRestaurantMenuInfo] = useState([]);
    useEffect(()=>{
        fetchMenu(id);
    }, []);
    const fetchMenu = async (id)=>{
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.22271&lng=81.2456563&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const result = await response.json();
        console.log(result)
        setRestaurantMenuInfo(result);

    }
    
    
    return restaurantMenuInfo;
}
export default useRestaurantMenu;