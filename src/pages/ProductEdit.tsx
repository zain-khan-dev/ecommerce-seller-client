import {ProductSchema} from "../utils/Constants"
import {useSelector} from "react-redux"
import {RootState} from "../reducer/store"


const ProductEdit = () => {

    let products = useSelector((state: RootState) => state)

    console.log(products)


    return (
        <div>This is a product edit page</div>
    )
}


export default ProductEdit