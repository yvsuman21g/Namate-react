import RestaurantCard from "./RestaurantCard";
import '../../Index.css'
import { Component, useEffect, useState } from 'react';
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {

  // State Variable - Super power
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const[filterRestaurant, setFilterRestaurant] = useState([])

  const [searchText, setSeachText] = useState("");

  console.log("Component redered");


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5767599&lng=77.32310939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();
    console.log(json)
    // setlistOfRestaurant(json.data.cards[0].card.card.id.gridElements)
    setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //  Conditional Rendering - 

  return listOfRestaurant.length === 0 ? <ShimmerUI /> : (
    <div className='body'>
      <div className="filter">
        <div className="search">
          <input type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)} />

          <button
            onClick={() =>{ 
              console.log(searchText)
              const filterredRestaurant = listOfRestaurant.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchText));
              setFilterRestaurant(filterredRestaurant);
            }}>
            Search</button>
        </div>
        <div className='filter-btn'
          onClick={() => {
            // Top rated Restaurant [rating 4]
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant?.info.avgRating > 4);
            setlistOfRestaurant(filteredList) 

          }}>
          <button>Top Rated Restaurants</button>
        </div>
      </div>
      <div className='res-container'>
        {
          filterRestaurant?.length &&
          filterRestaurant.map((restaurant) =>
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              <RestaurantCard 
              resData={restaurant} /></Link>
            // <RestaurantCard  resData={restaurant}/>
            )

        }
      </div>
    </div>
  )
}
export default Body;