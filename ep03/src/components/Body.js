import ResContainer from "./ResContainer";

import resList from "../utils/mockdata";
import { useState } from "react";

function filterList(searchText,listOfRestaurants){
    const data = listOfRestaurants.filter(res => res.data.name.includes(searchText));
    return data;
}

const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState(resList);
    const [searchText,SetSearchText] = useState("");

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