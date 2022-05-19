export const BASE_URL:string = "http://localhost:8000/ecommerce/"



export interface ProductSchema {
    id:number;
    name:string;
    description:string;
    stock:number;
    price:number;
}



export interface OrderSchema {
    status:string;
    order_ts:string;
    bought_at:number;
    quantity:number;
    product_id: ProductSchema
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


export interface UserRegisterDetails {
    user:{username:string, password:string}
    address:string;
    name:string
    phone_number:string
}

export interface UserLoginDetails {
    username:string, password:string
}
