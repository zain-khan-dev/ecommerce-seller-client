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
    images:ImageSchema[],
    category:String;
    discount:number;
}



export interface OrderSchema {
    status:string;
    order_ts:string;
    id:string;
    price:number;
    quantity:number;
    product_id: ProductSchema
}

export const ORDER_STATUS = [
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


export const NEXT_STATUS_MAPPING:any = {
    "PE":"PL",
    "PL":"PKD",
    "PKD":"SHP",
    "SHP":"OFD",
    "OFD":"CMP"
}


export interface UserLoginDetails {
    username:string, password:string
}

export const TOTAL_PHOTOS_ALLOWED = 7


export const CATEGORY_MAPPING:any = {
    'appliances':'Appli',
    'apps':'Apps ',
    'arts':'Arts',
    'auto':'Auto',
    'baby':'Baby',
    'beauty':'Beaut',
    'books':'Books',
    'cd':'CDs',
    'phones':'Cell',
    'cloths':'Cloth',
    'collectibles':'Colle',
    'computers':'Compu',
    'electronics':'Elect',
    'garden':'Garde',
    'grocery':'Groce',
    'handmade':'Handm',
    'health':'Healt',
    'home':'Home',
    'industry':'Indus',
    'luggage':'Lugga',
    'movies':'Movie',
    'instruments':'Music',
    'office':'Offic',
    'pet':'Pet',
    'sports':'Sport',
    'tools':'Tools',
    'toys':'Toys',
    'games':'Video',
}