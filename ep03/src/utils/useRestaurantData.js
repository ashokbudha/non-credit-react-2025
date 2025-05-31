import {useEffect,useState} from 'react'
import { SWIGGY_API } from './constants';

const useRestaurantData = () => {
    const [listOfRestaurants, SetListOfRestaurants] = useState([]);

     useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData() {
        const res = await fetch(SWIGGY_API);
        const json = await res.json();
        SetListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    return {listOfRestaurants,SetListOfRestaurants};
}

export default useRestaurantData
