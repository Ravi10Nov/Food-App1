import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardslice';

const appStore = configureStore({
    reducer:{
        card:cardReducer ,
    }
})

export default appStore;