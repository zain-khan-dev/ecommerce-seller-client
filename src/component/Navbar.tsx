import {Link} from "react-router-dom"

const Navbar = () => {

    

    return(
        <div >
            <div >
                <Link to=""><span>Home</span></Link>
                <Link to=""><span>About</span></Link>
                <Link to=""><span >Success Stories</span></Link>
                <Link to="/products"><span>My Products</span></Link>
                <Link to=""><span>Stats</span></Link>
                <Link to=""><span>Pending Orders</span></Link>
                <span>SingleProductStat</span>
                <span>Profile</span>
                <span>Signout</span>
                <span >Signup</span>
            </div>
        </div>
    )
}


export default Navbar