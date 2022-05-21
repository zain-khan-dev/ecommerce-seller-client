import { OrderSchema } from "../utils/Constants"
import {FC} from "react"


interface Prop {
    order:OrderSchema
}


const IndividualOrder:FC<Prop> = ({order}) => {
    return (
        <div>{order.order_ts}</div>
    )
}

export default IndividualOrder