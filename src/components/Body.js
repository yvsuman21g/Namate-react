import RestaurantCard from "./RestaurantCard";
import '../../Index.css'
import { useState } from 'react';
import resList from '../utils/mockData'

const Body = () =>{

  // State Variable - Super power
  const[listOfRestaurant, setlistOfRestaurant] = useState(resList);

  // Normal JS Variable  


    return(
        <div className='body'>
            <div className='filter-btn' 
            onClick={()=>{
              // Top rated Restaurant [rating 4]
             const filteredList = listOfRestaurant.filter(
                (res) =>res.data.avgRating > 4);
                setlistOfRestaurant(filteredList)

              }}>
              <button>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurant.map((restaurant) =>
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}
export default Body;