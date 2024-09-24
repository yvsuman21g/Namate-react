import RestaurantCard, {withPromotedLabel} from "./RestrauntCard";
import '../../Index.css'
import { Component, useEffect, useState } from 'react';
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";


const Body = () => {

  // State Variable - Super power
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([])

  const [searchText, setSeachText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Component redered");
  console.log("Body Rendered", listOfRestaurant);


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5767599&lng=77.32310939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();
    setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlinestatus = useOnlinestatus();

  //  Conditional Rendering - 

  if (onlinestatus === false) {
    return (
      <h1>
        Looks like you are offline !!! Please check Your internet connection
      </h1>)
  }

  return listOfRestaurant.length === 0 ? <ShimmerUI /> : (

    <div>
      <div className="flex">
        <div className="m-2 p-2">
          <input type="text"
            className="search-box border border-black"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)} />

          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg hover:bg-yellow-200"
            onClick={() => {
              console.log(searchText)
              const filterredRestaurant = listOfRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText));
              setFilterRestaurant(filterredRestaurant);
            }}>
              
            Search</button>
        </div>
        <div className="m-2 p-2 pt-6 text-center">
        <div className='filter-btn px-4 py-2 bg-slate-300 rounded-lg hover:bg-green-300'
          onClick={() => {
            // Top rated Restaurant [rating 4]
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant?.info.avgRating > 4);
            setlistOfRestaurant(filteredList)

          }}>
          <button>Top Rated Restaurants</button>
        </div>
        </div>
      </div>
      <div className='flex flex-wrap ml-20'>
        {
          filterRestaurant?.length &&
          filterRestaurant.map((restaurant) =>
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              {
                restaurant?.data?.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard
                resData={restaurant} />
              }
              </Link>
          )

        }
      </div>
    </div>
  )
}
export default Body;