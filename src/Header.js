import { useSelector } from "react-redux";
import { Link } from "react-router-dom";    


const Header = () => {

    const item = useSelector((store) => store?.card?.items)

    const location = useSelector((store)=> store.location)
    console.log(location)

    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&usqp=CAU" />
                {/* <div className="search-container">
                    <input type="text" placeholder={location}></input>
                </div> */}
            </div>
            <div className="head-links">
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                    <li><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
                    <li><Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>Cart{item.length !== 0 && <span className="item-length">
                        {item.length}
                    </span>}</Link></li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;