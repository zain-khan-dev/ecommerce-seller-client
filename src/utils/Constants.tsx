export const BASE_URL:string = "http://localhost:8000/ecommerce/"




interface ImageSchema {
    id:number,
    src:string,
    product_id:number
}

export interface ProductSchema {
    id:number;
    name:string;
    description:string;
    stock:number;
    price:number;
    images:ImageSchema[]
}



export interface OrderSchema {
    status:string;
    order_ts:string;
    bought_at:number;
    quantity:number;
    product_id: ProductSchema
}

export const orderStatus = [
    {key:"PE", name:"Order Pending"},
    {key:"PL", name:"Order Placed"},
    {key:"OFD", name:"Out For Delivery"},
    {key:"PKD", name:"Order Packed"},
    {key:"SHP", name:"Order Shipping"},
    {key:"CMP", name:"Order Completed"},
    {key:"UNF", name:"Unfulfilled"}
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

export const TOTAL_PHOTOS_ALLOWED = 7