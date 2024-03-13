

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&usqp=CAU"/>
                <div className="search-container">
                    <input type="text" placeholder="Prayagraj ,Uttar Pradesh"></input>
                </div>
            </div>
            <div className="head-links">
                <ul>
                    <li>Home</li> 
                    <li>About</li> 
                    <li>Cart</li> 
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;