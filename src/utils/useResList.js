import { useEffect, useState } from "react";


const useResList = () =>{

    const [resList , setResList] = useState([]);
    const [filterList , setFilterList] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4529334&lng=81.8348882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3072&lng=73.1812&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0225&lng=72.5714&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        // setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {resList,filterList};
}

export default useResList ;