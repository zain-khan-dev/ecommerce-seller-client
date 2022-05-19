import * as React from 'react';
import {Link} from "react-router-dom"
import {ProductSchema} from "../utils/Constants"


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
        <div >
            <div
            />
            <div >
                <span  >
                {prop.product.name}
                </span>
                <span >
                    {prop.product.description}
                </span>
            </div>
            <div >
                <div ><Link to="/productEdit/1" >Edit</Link></div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ProductCard