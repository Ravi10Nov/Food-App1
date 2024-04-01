import { createSlice, current } from "@reduxjs/toolkit";


const cardslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
            );
            if (itemIndex >= 0) {
                state.items[itemIndex].cardQuantity += 1;
            } else {
                const tempItem = { ...action.payload, cardQuantity: 1 }
                state.items.push(tempItem)
            }
        },
        removeItem:(state,action) =>{
            const itemIndex = state.items.findIndex(
                (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
            );
            if (state?.items[itemIndex]?.cardQuantity>1){
                state.items[itemIndex].cardQuantity -= 1
            } else if(state?.items[itemIndex].cardQuantity === 1){
                state.items.splice(itemIndex,1)
            }
        },
        increaseQunatity:(state,action)=>{
            const itemIndex = state.items.findIndex(
                (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
            );
            if (itemIndex >= 0) {
                state.items[itemIndex].cardQuantity += 1;
            }
        }
    }
})

export const { addItems,removeItem,increaseQunatity } = cardslice.actions

export default cardslice.reducer