import { useDispatch, useSelector } from "react-redux";
import { Image_Url } from "./utils/constant";
import { increaseQunatity, removeItem } from "./utils/cardslice";
import { Link } from "react-router-dom";


const Cart = () => {

    const cartItem = useSelector((store) => store?.card?.items)
    console.log(cartItem)

    const dispatch = useDispatch();

    const addQunatity = (item) =>{
        dispatch(increaseQunatity(item))
    }

    const removeQunatity = (item) => {
        dispatch(removeItem(item))
    }

    const cartQuantityAmount = cartItem.map((item)=>(
        item.cardQuantity * ((Math.round(item?.card?.info?.price / 100)) || (Math.round(item?.card?.info?.defaultPrice/100)))
    ))

    // if (cartQuantityAmount.length!==0){
    //     const total = cartQuantityAmount.reduce((acc,curr)=> acc+curr)
    // }

    const acc = 0;

    const total = cartQuantityAmount.reduce((acc,curr)=> acc+curr,acc)


    // console.log(cartQuantityAmount)

    return (
        <div className="cart-container">
            <h2>Cart Items</h2>
            {cartItem.length ===0 ? 
            <div>
                <h3>Please Add items into cart.</h3>
                <Link to='/'><button>Home Page</button></Link>
            </div>:<>
            {cartItem.map((item) => (
                <div className="cart" key={item?.card?.info?.id}> 
                    <div className="cart-img-name">
                        <img src={Image_Url + item?.card?.info?.imageId} />
                        <p>{item?.card?.info?.name}</p>
                    </div>
                    <h4>₹- {Math.round(item?.card?.info?.price / 100) || Math.round(item?.card?.info?.defaultPrice/100)}</h4>
                    <div>
                        <button className="btn-add-quantity-cart" >
                            <span className="btn btn-rm-cart" onClick={() => removeQunatity(item)} > - </span>
                            <span className="btn-ad-cart"> {item?.cardQuantity} </span>
                            <span className="btn btn-ad-cart" onClick={()=>addQunatity(item)}> + </span>
                        </button>
                    </div>
                    <h4>₹- {((Math.round(item?.card?.info?.price / 100) || Math.round(item?.card?.info?.defaultPrice/100)))*(item?.cardQuantity)}</h4>
                </div>
            ))
            }
            {cartQuantityAmount.length!==0 && 
            <div className="cart-total">
                <h3>Total</h3>
                <h3 className="total">₹- {total}</h3>
            </div>}
            </>
            
        }
        </div>
    )
}

export default Cart;