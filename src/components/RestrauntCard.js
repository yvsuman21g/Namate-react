import { CDN_URL } from "../utils/constants";
import '../../Index.css'
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
    return (
        <div className="">
        <div className='w-60 bg-gray-200 m-4 p-4 border rounded-xl hover:bg-gray-300'>
            <img className='border rounded-lg hover:shadow-2xl' src={CDN_URL + cloudinaryImageId} />
            <h3 className="text-lg font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
        </div>
    )
}
export default RestaurantCard;

// Higher Order Component input - RestaurantCard ==>> output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}