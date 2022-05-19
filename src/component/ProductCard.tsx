import * as React from 'react';
import {Link} from "react-router-dom"
import {ProductSchema} from "../utils/Constants"
import beigeHat from "../beigehat.webp"

interface Prop {
    product:ProductSchema;
    deleteFunc:(id:number)=>void
}


const ProductCard:React.FC<Prop> = (prop:Prop) => {


    const handleDelete = () => {

        console.log(prop.product.id)

        prop.deleteFunc(prop.product.id)

    }

    return (
        <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col w-[220px] mt-4 md:mt-0" >
            <img width={"170px"} height={"100px"} className="mx-auto p-1 rounded-xl max-w-xs h-auto" src={beigeHat} />
            <h1 className="text-xl font-bold mt-4">{prop.product.name}</h1>
            <div className="mt-4 text-md ">
                {prop.product.description}
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="bg-yellow-500 px-4 py-1 rounded text-black" ><Link to="/productEdit/1" >Edit</Link></div>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 rounded" >Delete</button>
            </div>
        </div>
    );
}

export default ProductCard