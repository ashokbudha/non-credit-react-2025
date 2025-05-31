import { RES_URL } from "../utils/constants";
const ResCard = (props) =>{
    const {resData} = props;
    const {name, deliveryTime, costForTwo, cloudinaryImageId, cuisines, avgRating} = resData?.info;

    return(
        <div className="resCard">
            <img src={RES_URL} alt="image" />
            <h1 className="name">{name}</h1>
            <h2 className="cuisines">{cuisines.join(", ")}</h2>
            <h2 className="avgRating">{avgRating}</h2>

        </div>
    )
}

export default ResCard;
