// import resList from "../utils/mockdata";
import ResCard from "./ResCard";

const ResContainer = (props) =>{
    const {resList} = props;
    return(
        <div className="resContainer">

            {resList.map((item) =>{
                return(<ResCard key={item.info.id} resData={item}/>);
            })}

        </div>
    );
    
}

export default ResContainer;