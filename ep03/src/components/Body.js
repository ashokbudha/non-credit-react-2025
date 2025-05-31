import ResContainer from "./ResContainer";
import { SWIGGY_API } from "../utils/constants";

import { useState ,useEffect} from "react";

function filterList(searchText,listOfRestaurants){
    const data = listOfRestaurants.filter(res => res.data.name.includes(searchText));
    return data;
}

const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState([]);
    const [searchText,SetSearchText] = useState("");
     
    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData() {
        const res = await fetch(SWIGGY_API);
        const json = await res.json();
        SetListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log("Data of Swiggy Api is given below:-\n")
        // console.log(listOfRestaurants);
        
    }


if(listOfRestaurants.length ===0){
    return(<h1><center>Loading Page</center></h1>
    )
}

return(
    <>
    <div className="searchBar">
        <input type="search" placeholder="Search a Restaurant or Food." value ={searchText} onChange={(e)=> {SetSearchText(e.target.value)}}/>
        <button onClick = {()=>{
            const data = filterList(searchText,listOfRestaurants);
            SetListOfRestaurants(data);
            SetSearchText("");
        }}>Search</button>
        <button className="filter" onClick={()=> {
           const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating>4);
           SetListOfRestaurants(filteredList);
        }}
        >Filter</button>
    </div>
    <ResContainer resList = {listOfRestaurants}/>
    </>
)
}

export default Body;