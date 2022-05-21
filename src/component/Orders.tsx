import {OrderSchema, orderStatus} from "../utils/Constants"
import {FC, useEffect, useState} from "react"
import IndividualOrder from "./IndividualOrder"
import DropDown from "./DropDown"

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
            <select className="p-2 my-4 " value={filter} onChange={(handleFilterChange)}>
                {orderStatus.map((status)=><option className="font-sans " value={status.key}>{status.name}</option>)}
            </select>
            </div>
            <h1 className="font-bold font-2xl">{orderStatus.filter((status)=>status.key==filter)[0].name}</h1>
            <div className="grid grid-cols-4 md:grid-cols-1">
                {orders.map((order)=><IndividualOrder order={order} />)}
            </div>
        </div>
    )
}


export default Orders