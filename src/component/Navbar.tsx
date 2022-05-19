import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { setLoggedState } from "../reducer/LoginSlice"
import { RootState } from "../reducer/store"
import DropDown from "./DropDown"

const Navbar = () => {

    const isLogged = useSelector((state:RootState)=>state.logged.isLogged)

    const dispatch = useDispatch()

    const handleLogout = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        dispatch(setLoggedState(false))
    }


    // get the login navbar 
    if(isLogged){
        return(
            <div className="hidden md:flex flex-row w-3/4 mx-auto justify-evenly text-xl  text-black font-medium mb-4">
                <Link to="/dashboard"><span>Dashboard</span></Link>
                <Link to="/products"><span>My Products</span></Link>
                <Link to="/stats"><span>Products Stats</span></Link>
                <Link to="/orders"><span>Pending Orders</span></Link>
                <Link to="/my-profile"><span>Profile</span></Link>
                <button onClick={handleLogout} className="font-sm text-red-600 no-underline"> Logout</button>
            </div>
        )

    }
    else{
        return(
            <div >
                <div className="hidden md:flex flex-row w-3/4 mx-auto justify-evenly text-xl  text-black font-medium underline mb-4">
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