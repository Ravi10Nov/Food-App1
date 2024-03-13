import { useState } from "react";
import useResList from "./utils/useResList";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    const {resList,filterList} = useResList();

    return (
        <div className="body-container">
            <div className="body-search">
                <div className="search-input">
                    <input type="text" placeholder="Search Restaurant" />
                    <button className="btn-search">Search</button>
                </div>
                <div>
                    <button className="btn-search">Top Restaurant</button>
                </div>
            </div>

            <div className="restaurant-container">
                {filterList.map((res)=>(
                    <RestaurantCard key={res?.info?.id} resInfo = {res} />
                ))}
            </div>

        </div>  
    )
}

export default Body;