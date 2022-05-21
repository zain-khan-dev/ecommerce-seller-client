import { useEffect, useState } from "react"
import { getAuthData } from "../utils/utilityFunc"
import ProductCard from "../component/ProductCard"
import {ProductSchema} from "../utils/Constants"
import {deleteData} from "../utils/utilityFunc"
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../reducer/store"
import {getProducts} from "../utils/utilityFunc"
import {Link} from "react-router-dom"
import {setProduct} from "../reducer/ProductSlice"


const SellerProducts = () => {


    let products = useSelector((state: RootState) => state.products.productList)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState<boolean>(false)
    const [productView, setProductView] = useState(products)


    useEffect(()=>{

        if(products.length == 0){
            getProducts()
            .then((result)=>{
                setLoading(false)
                console.log(result)
                const productList:ProductSchema[] = result.data as ProductSchema[]
                console.log(productList)
                dispatch(setProduct(productList))
                setProductView(productList)
            })
            .catch((e)=>{
                console.log("error occured")
                return []
            })
        }
        else{
            setLoading(false)
            console.log("now here")
        }

    }, [])

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
                <div className="grid md:grid-cols-5 grid-cols-1 content-center text-center mt-4" >
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