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
        <div>
            <Orders orderList={allOrders} />
        </div>

    )
}


export default SellerOrders