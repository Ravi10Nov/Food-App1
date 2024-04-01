

const RestaurantCard = ({resInfo}) =>{

    const {name ,cloudinaryImageId,areaName,avgRating,cuisines} = resInfo?.info

    return(
        <div className="restaurants">
            <div className="restaurant">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
                <h3>{name}</h3>
                <div className="details">
                    <span className="cuisine">{cuisines.join(', ')}</span>
                    <span className="rating">{avgRating}*</span>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;