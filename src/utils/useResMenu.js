import { useEffect, useState } from "react"
import { Menu_API } from "./constant";


const useResMenu = (API) =>{

    const [resMenu , setReMenu] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(API)

        const json = await data.json();

        setReMenu(json)
    }

    return resMenu;
};

export default useResMenu;