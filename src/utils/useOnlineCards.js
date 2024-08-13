import { useState, useEffect } from 'react';
import { SWIGGY_CARDS_URL } from './constants';
const useOnlineCards = () =>{
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);

        useEffect(()=>{
            fetchData();
        }, [])

        const fetchData = async () =>{
            const data = await fetch(SWIGGY_CARDS_URL);
            const json = await data.json();
            setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    return(
        listOfRestaurant,
        filterRestaurant
)
}
export default useOnlineCards;