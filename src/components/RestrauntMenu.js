import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurntMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId);

    if (resInfo === null) return <ShimmerUI />;

    const { name, cuisines, costForTwoMessage, } = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // Categories for Accordian
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* Categories Accordians */}
            {
                categories.map((category)=> <RestaurantCategory/>)
            }
            <ul>
                {
                    itemCards?.length &&
                    itemCards?.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."} {item?.card?.info?.price / 100}</li>
                    ))}
            </ul>
        </div>
    )
}
export default RestaurntMenu;