import { OrderSchema } from "../utils/Constants"
import {FC} from "react"
import {NEXT_STATUS_MAPPING, ORDER_STATUS}from "../utils/Constants"
import { putAuthData } from "../utils/utilityFunc"

interface Prop {
    order:OrderSchema
}






const IndividualOrder:FC<Prop> = ({order}) => {


    console.log(order.status)
    const next_status = NEXT_STATUS_MAPPING[order.status]

    const next_status_name = ORDER_STATUS.filter((order)=> order.key===next_status)[0].name

    const handleStatusChange = () => {

        console.log("change the status to PL")
        putAuthData(`/orders/${order.id}/`, {...order, product_id:order.product_id.id, status:next_status})
        .then((result)=>{
            console.log("Changed the status to "+ next_status)
        })
        .catch((e)=>{
            console.log(e)
        })

    }


    return (
        <div className="flex flex-col bg-white p-2 my-2 shadow-xl rounded-xl w-2/5 mx-auto">
            <div className="text-sm">Order ID {order.id}</div>
            <table className="table-auto  text-center">
                <tbody className="p-2">
                    <tr >
                        <th className="p-2">Product ID</th>
                        <td className="p-2">{order.product_id.id}</td>
                    </tr>
                    <tr >
                        <th className="p-2">Name</th>
                        <td className="p-2">{order.product_id.name}</td>
                    </tr>
                    <tr>
                        <th className="p-2">Bought at</th>
                        <td className="p-2">{order.price}</td>
                    </tr>
                    <tr>
                        <th className="p-2">Quantity</th>
                        <td className="p-2">{order.quantity}</td>
                    </tr>
                    <tr>
                        <td className="border-2 border-black"></td>
                        <td className="border-2 border-black"></td>
                    </tr>
                    <tr className="text-xl">
                        <th className="p-2">Total</th>
                        <td className="p-2">{order.price * order.quantity}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleStatusChange} className="bg-green-600 px-3 py-2 rounded-xl shadow-xl text-white mx-auto">{"Change to "  + next_status_name}</button>
        </div>
    )
}

export default IndividualOrder