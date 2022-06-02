import * as React from 'react';
import {Link} from "react-router-dom"
import {ProductSchema} from "../utils/Constants"
import beigeHat from "../beigehat.webp"

interface Prop {
    product:ProductSchema;
    deleteFunc:(id:number)=>void
}


const ProductCard:React.FC<Prop> = ({product, deleteFunc}) => {


    console.log(product)

    const handleDelete = () => {

        console.log(product.id)

        deleteFunc(product.id)

    }

    return (
        <div className="bg-white rounded-xl shadow-xl flex flex-col md:mx-5 md:p-2 my-4 md:text-center" >
            {}
            <img width={"170px"} height={"100px"} className="ml-4 md:mx-auto p-1 rounded-xl max-w-xs h-auto" src={product.images.length>0?product.images[0].src:beigeHat} />
            <h1 className="text-xl font-bold mt-4">{product.name}</h1>
            <div className="mt-4 text-md ">
                {product.description.substring(0, 25)} ... 
            </div>
            <div className="flex flex-row mt-4 ">
                <div className="bg-yellow-500 px-4 py-1 rounded text-black" ><Link to={`/productEdit/${product.id}`} >Edit</Link></div>
                <button onClick={handleDelete} className="ml-8 bg-red-500 text-white px-4 py-1 rounded" >Delete</button>
            </div>
        </div>
    );
}

export default ProductCard