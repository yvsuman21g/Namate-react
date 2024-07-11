import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurntMenu = () =>{
    const[resInfo, setResInfo] = useState(null);

    const { resId } = useParams() 

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setResInfo(json.data); 
        console.log(json.data)
    }

   if(resInfo === null) return <ShimmerUI/>;

    const { name, cuisines, costForTwoMessage,} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="Menu">
           <h1>{name}</h1>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
           <h2>Menu</h2>
           <ul>
                {
                itemCards?.length &&
                itemCards?.map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."} {item?.card?.info?.price / 100}</li>
                ))}
           </ul>
        </div>
    )
}
export default RestaurntMenu;