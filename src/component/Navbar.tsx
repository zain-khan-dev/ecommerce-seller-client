import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { RootState } from "../reducer/store"
import DropDown from "./DropDown"

const Navbar = () => {

    const isLogged = useSelector((state:RootState)=>state.logged.isLogged)

    // get the login navbar 
    if(isLogged){
        return(
            <div className="hidden md:flex flex-row w-1/2 mx-auto justify-evenly text-xl  text-fuchsia-900 font-medium underline mb-4">
                <Link to="/dashboard"><span>Dashboard</span></Link>
                <Link to="/products"><span>My Products</span></Link>
                <Link to="/stats"><span>Products Stats</span></Link>
                <Link to="/orders"><span>Pending Orders</span></Link>
                <Link to="/my-profile"><span>Profile</span></Link>
            </div>
        )

    }
    else{
        return(
            <div >
                <div className="hidden md:flex flex-row w-1/2 mx-auto justify-evenly text-xl  text-fuchsia-900 font-medium underline mb-4">
                    <Link to="/home"><span>Home</span></Link>
                    <Link to="/about"><span>About</span></Link>
                    <Link to="/success-stories"><span >Success Stories</span></Link>
                    <DropDown />
                </div>
            </div>
        )

    }


}


export default Navbar