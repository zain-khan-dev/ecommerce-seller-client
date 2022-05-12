import {useState} from "react"
import { postData } from "../utills/utilityFunc"

const CreateProduct = () => {
    
    
    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("")

    const [stock, setStock] = useState(0)

    const [price, setPrice] = useState("")

    const handleCreateNewProduct = (e:any) => {
        e.preventDefault()
        var regexp = /^\d+\.\d{0,2}$/; // regex to match decimal
        if(regexp.test(price)){
            const localPrice = parseFloat(price)
            postData("product/", {name:title, description:description,stock:stock,price:price})
            .then((result)=>console.log(result))
            .catch((e)=>console.log(e))
        }
        else{
            alert("Enter a valid price")
        }
    }



    const handlePriceChange = (e:any) => {

        // e.preventDefault()
        var regexp = /^\d+\.\d{0,2}$/;
        console.log(e.target.value)
        setPrice(e.target.value)
            
        // returns true

    }

    return(
        <div>
            <form>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
                <label>Description: </label>
                <input type="text" value={description} onChange ={(e)=>setDescription(e.target.value)} /><br />
                <label>Stock: </label>
                <input type="number" value={stock} onChange={(e)=>setStock(parseInt(e.target.value))} /><br />
                <label>Price: </label>
                <input type="string" value={price} onChange={handlePriceChange} /><br />
                <button type="submit" onClick={handleCreateNewProduct}>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct