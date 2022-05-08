import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div >
            <Box display="flex" sx={{justifyContent:"space-between", mx:"auto"}} width={{md:"60%"}} >
                <Link to=""><Typography>Home</Typography></Link>
                <Link to=""><Typography>About</Typography></Link>
                <Link to=""><Typography >Success Stories</Typography></Link>
                <Link to="/products"><Typography>My Products</Typography></Link>
                <Link to=""><Typography>Stats</Typography></Link>
                <Link to=""><Typography>Pending Orders</Typography></Link>
                <Typography>SingleProductStat</Typography>
                <Typography>Profile</Typography>
                <Typography>Signout</Typography>
                <Typography >Signup</Typography>
            </Box>
        </div>
    )
}


export default Navbar