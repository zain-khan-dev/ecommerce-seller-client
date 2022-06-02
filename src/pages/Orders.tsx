import {OrderSchema, ORDER_STATUS} from "../utils/Constants"
import {FC, useEffect, useState} from "react"
import IndividualOrder from "../component/IndividualOrder"
import DropDown from "../component/DropDown"
import { getAuthData } from "../utils/utilityFunc"



const Orders = () => {


    const [filter, setFilter] = useState("PE")
    
    const [orders, setOrders] = useState<OrderSchema[]>([])
    

    useEffect(()=>{

        getAuthData("/orders/"+filter)
        .then((result)=>{
            console.log(result)
        })
        .catch((e)=>{
            console.log(e)
        })

    }, [])


    useEffect(()=>{
        getAuthData("/orders/"+filter)
        .then((result)=>{
            console.log(result)
            setOrders(result.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }, [filter])
 


    
    return (
        <div>
            <div>
            <select className="p-2 my-4 " value={filter} onChange={(e)=>setFilter(e.target.value)}>
                {ORDER_STATUS.map((status)=><option className="font-sans " value={status.key}>{status.name}</option>)}
            </select>
            </div>
            <h1 className="font-bold font-2xl">{ORDER_STATUS.filter((status)=>status.key==filter)[0].name}</h1>
            <div className="grid grid-cols-1">
                {orders.map((order)=><IndividualOrder order={order} />)}
            </div>
        </div>
    )
}


export default Orders