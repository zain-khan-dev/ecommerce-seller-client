import { useEffect, useState } from "react"
import { getData } from "../utills/utilityFunc"
import ProductCard from "../component/ProductCard"
import Grid from '@mui/material/Grid';

import {deleteData} from "../utills/utilityFunc"

interface ProductSchema {
    description:string;
    name:string;
    seller:string;
    stars:number;
    id:number;
}


const SellerProducts = () => {


    const [products, setProducts] = useState<ProductSchema[]>([])




    const deleteProduct = (id:number) => {

        deleteData("http://localhost:8000/ecommerce/product/", id)
        .then((result)=>{
            console.log(result)
        })
        .catch((e)=>{
            console.log("Failed to delete product with error "+ e)
        })
        setProducts(products.filter(product => product.id != id))

    }


    useEffect(() => {
        getData("product")
        .then((result)=>{
            setProducts(result.data)
        })
        .catch((e)=>{
            console.log("failed with error "+ e)
        })
    }, [])


    if(products.length == 0){
        console.log(products)
        return(
            <div>Loading</div>
        )
    }
    else{
        return(
            <Grid container sx={{m:2}} spacing={4}>
                {products.map((product => {
                    return (
                        <Grid item md={2} xs={8}><ProductCard product={product} deleteFunc={deleteProduct} /></Grid>
                    )
                }))}
                {/* <Grid item md={2} xs={8}><ProductCard product={{name:"add More", description:"Click here to add more",seller:"You", stars:4}} /></Grid> */}
            </Grid>
        )
    }

}

export default SellerProducts