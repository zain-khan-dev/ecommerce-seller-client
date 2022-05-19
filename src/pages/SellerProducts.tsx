import { useEffect, useState } from "react"
import { getAuthData } from "../utils/utilityFunc"
import ProductCard from "../component/ProductCard"
import {ProductSchema} from "../utils/Constants"
import {deleteData} from "../utils/utilityFunc"
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "../reducer/store"
import {getProducts} from "../utils/utilityFunc"
import {setProduct} from "../reducer/ProductSlice"


const SellerProducts = () => {


    let products = useSelector((state: RootState) => state.products.productList)
    const dispatch = useDispatch()

    const [productView, setProductView] = useState(products)


    useEffect(()=>{

        if(products.length == 0){
            console.log("here")
            getProducts()
            .then((result)=>{
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


    useEffect(() => {

    }, [])


    if(productView.length == 0){
        console.log(products)
        return(
            <div>Loading</div>
        )
    }
    else{
        return(
            <div >
                {productView.map((product => {
                    return (
                        <div ><ProductCard product={product} deleteFunc={deleteProduct} /></div>
                    )
                }))}
                {/* <Grid item md={2} xs={8}><ProductCard product={{name:"add More", description:"Click here to add more",seller:"You", stars:4}} /></Grid> */}
            </div>
        )
    }

}

export default SellerProducts