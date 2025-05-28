// import resList from "../utils/mockdata";
import ResCard from "./ResCard";
import { useState } from "react";

const ResContainer = (props) =>{
    const {resList} = props;
    return(
        <div className="resContainer">

            {resList.map((item) =>{
                return(<ResCard key={item.data.id} resData={item}/>);
            })}

        </div>
    );
    
}

export default ResContainer;