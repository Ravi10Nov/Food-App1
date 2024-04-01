import { useState } from "react";
import ProductItem from "./ProductItem";


const ResItem = ({items}) =>{

    const [showIndex , setShowIndex] = useState(true);

    const showItem = () =>{
        setShowIndex(!showIndex)
    }

    return(
        <div className="resItem-main">
            <div className="res-title">
                <h3 onClick={()=>showItem()}>{items?.card?.card?.title}</h3>
                <div>
                    <h4>{showIndex && items?.card?.card?.itemCards.map((item)=>(
                        <ProductItem key={item?.card?.info?.id} item={item}/>
                    ))}</h4>
                </div>
            </div>
        </div>
    )
}

export default ResItem;