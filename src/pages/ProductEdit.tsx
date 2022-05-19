import {ProductSchema} from "../utils/Constants"
import {useSelector} from "react-redux"
import {RootState} from "../reducer/store"
import { useLocation, useParams } from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import { putAuthData } from "../utils/utilityFunc"


const ProductEdit = () => {

    let products = useSelector((state: RootState) => state.products).productList


    console.log(products)

    const {id} = useParams()

    const [currentProduct, setCurrentProduct] = useState<ProductSchema>(products.filter(x => x.id === parseInt(id as string))[0])

    const [name, setName] = useState(currentProduct.name)
    const [description, setDescription] = useState(currentProduct.description)
    const [stock, setStock] = useState(currentProduct.stock)
    const [price, setPrice] = useState(currentProduct.price)

    const handleUpdate = () => {
        console.log(name, description, stock, price)

        putAuthData(`product/${currentProduct.id}/`, {name, description, stock, price})
        .then((result)=>{
            console.log("Successfully updated the product "+ result)
        })
        .catch((e)=>{
            console.log("Failed with error "+ e)
        })
    }

    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} /><br />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} /><br />
            <input value={stock} type="number" onChange={(e)=>setStock(parseInt(e.target.value))} /><br />
            <input value={price} type="number" onChange={(e)=>setPrice(parseFloat(e.target.value))} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}


export default ProductEdit