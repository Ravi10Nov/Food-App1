import { useParams } from "react-router-dom";
import useResMenu from "./utils/useResMenu";
import { Menu_API } from "./utils/constant";
import ResItem from "./ResItem";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const resMenu = useResMenu(Menu_API + resId + '&catalog_qa=undefined&submitAction=ENTER');

    if (resMenu === null) return;

    const { name, cuisines, areaName, city, avgRating, totalRatingsString } = resMenu?.data?.cards[2]?.card?.card?.info;

    const resIndex =  resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

    const category = resIndex?.cards.filter((item) =>(
        item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    ))

    return (
        <div className="res-menu">
            <div className="res-info-main">
                <div className="res-info">
                    <h2>{name}</h2>
                    <h5>{cuisines.join(' , ')}</h5>
                    <h5>{areaName} , {city} </h5>
                </div>
                <div className="res-rating">
                    <h3>{avgRating}*</h3>
                    <hr />
                    <h6>{totalRatingsString}</h6>
                </div>
            </div>
            <hr />
            <div className="res-items">
                {category.map((items) =>(
                    <ResItem key={items?.card?.card?.title} items={items}/>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;