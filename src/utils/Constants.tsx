export const BASE_URL:string = "http://localhost:8000/ecommerce/"



interface Product {
    name:string;
    description:string;
}


export interface OrderSchema {
    status:string;
    order_ts:string;
    bought_at:number;
    quantity:number;
    product_id: Product
}

export const orderStatus = [
    {key:"PE", value:"Order Pending"},
    {key:"PL", value:"Order Placed"},
    {key:"OFD", value:"Out For Delivery"},
    {key:"PKD", value:"Order Packed"},
    {key:"SHP", value:"Order Shipping"},
    {key:"CMP", value:"Order Completed"},
    {key:"UNF", value:"Unfulfilled"}
]