import {OrderSchema, orderStatus} from "../utils/Constants"
import {FC, useEffect, useState} from "react"
import IndividualOrder from "./IndividualOrder"

interface Props { 
    orderList: OrderSchema[];
}

const Orders:FC<Props> = ({orderList}) => {


    const [filter, setFilter] = useState("PE")
    
    const [orders, setOrders] = useState<OrderSchema[]>([])
    

    useEffect(()=>{
        setOrders(orderList.filter((order)=>order.status === "PE"))
    }, [orderList])
 
    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement>) => {

        setFilter(e.target.value)
        setOrders(orderList.filter((order)=>order.status === e.target.value))

    }

    
    return (
        <div>
            <div>
                <select value={filter} onChange={(handleFilterChange)}>
                    {orderStatus.map((status)=><option value={status.key}>{status.value}</option>)}
                </select>
            <span>{orderStatus.filter((status)=>status.key==filter)[0].value}</span>
            </div>
            <div>
                {orders.map((order)=><IndividualOrder order={order} />)}
            </div>
        </div>
    )
}


export default Orders