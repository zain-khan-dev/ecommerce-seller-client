import { Box, Typography } from "@mui/material"
import { useEffect,useState } from "react"
import {getAuthData} from "../utils/utilityFunc"
import {OrderSchema, orderStatus} from "../utils/Constants"
import Orders from "../component/Orders"


const SellerOrders = () => {

    const [allOrders, setAllOrders] = useState<OrderSchema[]>([]) 


    useEffect(() => {

        getAuthData("order/")
        .then((result)=>{
            setAllOrders(result.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }, [])



    return(
        <Box display="flex" flexDirection="column">
            <div>
                <Orders orderList={allOrders} />
            </div>
        </Box>

    )
}


export default SellerOrders