import { useEffect, useState } from "react";
import useResList from "./utils/useResList";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const Body = () => {
    
    const [topRes, setTopRes] = useState('Top Restaurant')
    
    const [searchText, setSearchText] = useState('');
    
    

    const location = [
        { 'Allahabad': { lat: 25.4529334, long: 81.8348882 } },
        { 'Ahmedabad': { lat: 23.0225, long: 72.5714 } },
        { 'Vadodara': { lat: 22.3072, long: 73.1812 } },
        {'Lucknow':{lat:26.8466937,long:80.94616599999999}},
        {'Delhi ':{lat:28.7040592,long:77.10249019999999}},
    ]

    const [latLong, setLatLong] = useState(location[1].Ahmedabad);

    function getKeys(array) {
        let keys = [];
        array.forEach(obj => {
            keys.push(Object.keys(obj)[0]);
        });
        return keys;
    }

    const keys = getKeys(location);

    const dispatch = useDispatch();

    const { resList, filterList, setFilterList } = useResList('https://www.swiggy.com/dapi/restaurants/list/v5?lat=' + latLong.lat + '&lng=' + latLong.long + '&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    console.log(latLong)

    const handleChange = (event) => {
        const findIndex = keys.findIndex((key) => key === event.target.value)
        const city = event.target.value
        setLatLong(location[findIndex][city])
    }

    return (
        <div className="body-container">
            <div className="body-search">
                <div className="search-input">
                    <input type="text" placeholder="Search Restaurant" value={searchText} onChange={e =>
                        setSearchText(e.target.value)} />
                    <button className="btn-search" onClick={() => {
                        const searchList = resList.filter((res) => (
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                            res?.info?.cuisines.map((ele) => ele.toLowerCase()).includes(searchText.toLowerCase())
                        ))
                        if (searchList.length > 0) {
                            setFilterList(searchList);
                            setSearchText('');
                        } else {
                            <h1>There is nothing like that</h1>
                            setSearchText('');
                        }
                    }}>Search</button>
                        <label >Location</label>
                        <select className="select-location" onChange={handleChange} >
                            <option value={Object.keys(location[0])} >{Object.keys(location[0])}</option>
                            <option value={Object.keys(location[1])} selected>{Object.keys(location[1])}</option>
                            <option value={Object.keys(location[2])} >{Object.keys(location[2])}</option>
                            <option value={Object.keys(location[3])} >{Object.keys(location[3])}</option>
                            <option value={Object.keys(location[4])} >{Object.keys(location[4])}</option>
                        </select>
                </div>
                <div>
                    <button className="btn-search" onClick={() => {
                        {
                            if (topRes === 'Top Restaurant') {
                                const filteredList = resList.filter((res) => res?.info?.avgRating > 4.3)
                                setFilterList(filteredList)
                                setTopRes('All Restaurant')
                            } else {
                                setFilterList(resList)
                                setTopRes('Top Restaurant')
                            }
                        }
                    }}>{topRes}</button>
                </div>
            </div>

            <div className="restaurant-container">
                {filterList.map((res) => (
                    <Link to={'/resMenu/' + res?.info?.id} style={{ textDecoration: 'none', color: 'inherit' }} key={res?.info?.id}>
                        <RestaurantCard resInfo={res} />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Body;