import { Box, Typography } from "@mui/material"
import { useEffect,useState } from "react"
import {getAuthData} from "../utills/utilityFunc"


interface Order {
    status:string;
    order_ts:string;
    bought_at:number;
    quantity:number;
}


const SellerOrders = () => {


    const [allOrders, setAllOrders] = useState<Order[]>([]) 


    useEffect(() => {

        getAuthData("order/")
        .then((result)=>{
            console.log(result.data)
            setAllOrders(result.data)
        })
        .catch((e)=>{
            console.log(e)
        })


    }, [])



    return(
        <Box display="flex" flexDirection="column">
            <Typography variant="h4">Pending Orders</Typography>
            <div>
                {allOrders.map((order)=><div>{order.order_ts}</div>)}
            </div>
        </Box>

    )
}


export default SellerOrders