import {useState} from "react"
import { postData } from "../utills/utilityFunc"

const CreateProduct = () => {
    
    
    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("")
    

    const handleCreateNewProduct = (e:any) => {

        e.preventDefault()
        postData("product/", {title:title, description:description})

    }

    return(
        <div>
            <form>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /><br />
                <label>Description: </label>
                <input type="text" value={description} onChange ={(e)=>setDescription(e.target.value)} />
                <button type="submit" onClick={handleCreateNewProduct}>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct