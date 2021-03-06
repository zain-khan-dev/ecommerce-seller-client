import { useEffect, useState } from "react"
import { getAuthData, useAuthenticator, useProductFetch } from "../utils/utilityFunc"
import ProductCard from "../component/ProductCard"
import {ProductSchema} from "../utils/Constants"
import {deleteData} from "../utils/utilityFunc"
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../reducer/store"
import {getProducts} from "../utils/utilityFunc"
import {Link} from "react-router-dom"
import {setProduct} from "../reducer/ProductSlice"


const SellerProducts = () => {


    const isLogged = useAuthenticator()

    const dispatch = useDispatch()


    const products = useProductFetch()

    const [loading, setLoading] = useState<boolean>(false)
    const [productView, setProductView] = useState(products)

    

    useEffect(()=>{
        if(products.length > 0){
            setProductView(products)
            setLoading(false)
        }
        else{
            setLoading(true)
        }

    }, [products])



    const deleteProduct = (id:number) => {

        deleteData("http://localhost:8000/ecommerce/product/", id)
        .then((result)=>{
            console.log(result)
        })
        .catch((e)=>{
            console.log("Failed to delete product with error "+ e)
        })
        dispatch(setProduct(productView.filter(product => product.id != id)))

    }



    if(loading){
        console.log(products)
        return(
            <div>Loading</div>
        )
    }
    else{
        if(products.length == 0){
            return (
                <div className="flex flex-col items-center text-xl mt-4 text-gray-700">
                    <div className="">Seems lonely here  </div>
                    <div>Add more products <Link to="/createProduct/"><span className="underline text-blue-600 hover:cursor-pointer">here</span></Link></div>
                </div>
            )
        }
        else{
            return(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 " >
                    {productView.map((product => {
                        return (
                            <ProductCard product={product} deleteFunc={deleteProduct} />
                        )
                    }))}
                    {/* <Grid item md={2} xs={8}><ProductCard product={{name:"add More", description:"Click here to add more",seller:"You", stars:4}} /></Grid> */}
                </div>
            )
        }
    }

}

export default SellerProducts