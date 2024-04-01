import { useDispatch, useSelector } from "react-redux";
import { Image_Url } from "./utils/constant";
import { addItems ,removeItem } from "./utils/cardslice";
import { useState } from "react";


const ProductItem = ({ item }) => {

    const cardItem = useSelector((store) => store.card.items);

    const [isItem, setIsItem] = useState(0);

    if (item === null) return;
    const { name, imageId, price, description, defaultPrice } = item?.card?.info;

    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(addItems(item))
        setIsItem(isItem + 1)
    }

    const removeItems = (item) =>{
        dispatch(removeItem(item))
        setIsItem(isItem - 1)
    }

    

    return (
        <div className="product">
            <div className="product-des">
                <h4>{name}</h4>
                <h5>₹-{Math.round(price / 100) || Math.round(defaultPrice / 100)} </h5>
                <p>{description}</p>
            </div>
            <div className="product-img">
                <img src={Image_Url + imageId} />
                {isItem ===0 ?
                    <button className="btn-add" onClick={() => addItem(item)}>Add</button> :
                    <button className="btn-add-quantity" >
                        <span className="btn btn-rm" onClick={() =>removeItems(item)}> - </span>
                        <span> {isItem} </span>
                        <span className="btn btn-ad" onClick={() => addItem(item)}> + </span>
                    </button>
                }
            </div>
        </div>
    )
}


export default ProductItem;

// cardItem?.info?.id === item?.card?.info?.id ?
//                 <button className="btn-add" ><span>-</span>
//                 <span>   </span>
//                 <span>+</span>
//                 </button>:
//                 <button className="btn-add" >Add</button>