import {ProductSchema} from "../utils/Constants"
import {useSelector} from "react-redux"
import {RootState} from "../reducer/store"
import { useLocation, useParams } from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import { putAuthData, useAuthenticator, useProductFetch } from "../utils/utilityFunc"
import { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { CATEGORY_MAPPING } from "../utils/Constants"

const ProductEdit = () => {


    const isLogged = useAuthenticator()
    let products = useProductFetch()

    const {id} = useParams() 

    const [currentProduct, setCurrentProduct] = useState<ProductSchema|null>(null)

    console.log("Inside product edit")
    console.log(products)

    useEffect(()=>{

        if(id)
            setCurrentProduct(products.filter((product)=>product.id === parseInt(id))[0])

    }, [products])


    if(!id){
        return <div>404</div>
    }

    if(currentProduct == null){
        return <div>Loading</div>
    }

    return (
        <div>
            <div className="flex flex-col w-1/3 mx-auto mt-4">
                <h1 className="text-2xl font-bold mx-auto">Update Product</h1>
                <Formik
                    initialValues={{
                        name: currentProduct.name,
                        description: currentProduct.description,
                        stock:currentProduct.stock,
                        price:currentProduct.price,
                        discount: currentProduct.discount,
                        category:currentProduct.category
                    }}
                    onSubmit={async (values) => {

                        putAuthData(`/product/${currentProduct.id}/`, {...currentProduct, ...values})
                        .then((result)=>{
                            console.log(result)

                        })
                        .catch((e)=>{
                            console.log(e)
                        })
                    }}
                    >
                    <Form className="flex flex-col">
                        <label className="block mt-2 text-lg font-semibold p-2">Name:</label>
                        <Field className="block mb-2 p-2 shadow-xl rounded-xl bg-gray-100 w-full" name="name" id="name" />
                        <label className="block mt-2 text-lg font-semibold p-2">Description</label>
                        <Field as="textarea" className="block mb-2 p-2 shadow-xl rounded-xl bg-gray-100 w-full" name="description" id="description" />
                        <label className="block mt-2 text-lg font-semibold p-2">Stock</label>
                        <Field className="block mb-2 p-2 shadow-xl rounded-xl bg-gray-100 w-full" name="stock" id="stock" />
                        <label className="block mt-2 text-lg font-semibold p-2">Price</label>
                        <Field className="block mb-2 p-2 shadow-xl rounded-xl bg-gray-100 w-full"  name="price" id="price" />
                        <label className="block mt-2 text-lg font-semibold p-2">Discount</label>
                        <Field className="block mb-2 p-2 shadow-xl rounded-xl bg-gray-100 w-full" name="discount" id="discount" />
                        <label className="block mt-2 text-lg font-semibold p-2">Category</label>
                        <Field as="select" name="category" id="category">s
                            {Object.keys(CATEGORY_MAPPING).map((product)=><option value={CATEGORY_MAPPING[product]}>{product}</option>)}
                        </Field>
                        <button type="submit" className="bg-yellow-600 w-fit px-5 py-2 my-4 text-white rounded-xl shadow-xl mx-auto">Submit</button>
                    
                    </Form>
                    </Formik>
            </div>
        </div>
    )
}


export default ProductEdit