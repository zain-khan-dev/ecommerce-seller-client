import { Formik, Field, Form } from "formik"
import {useState} from "react"
import { string } from "yup"
import { postAuthData } from "../utils/utilityFunc"


const CreateProduct = () => {

    return(
        <div className="width-full max-w-sm bg-white shadow-md mx-auto p-4 rounded-xl md:mt-10 mt-2">
        <Formik
            initialValues={{
                name:'',
                description:'',
                price: '',
                stock: ''
            }}
            onSubmit={(values)=>{
                var regexp = /^\d+\.\d{0,2}$/; // regex to match decimal
                console.log(values.price)
                if(regexp.test(values.price)){
                    const localPrice = parseFloat(values.price)
                    postAuthData("product/", {name:values.name, description:values.description,stock:values.stock,price:values.price})
                    .then((result)=>console.log(result))
                    .catch((e)=>alert("Difficult" + e))
                }
                else{
                    alert("Enter correct price")
                }
            }}
            >   
                <Form className="flex flex-col rounded text-center ">
                    <label className="mt-4 text-xl font-medium">Name</label>
                    <Field 
                        className=" shadow-xl rounded-xl bg-white w-full px-3 py-2"
                        name="name"
                        id="name"
                        placeholder="Enter the product name"
                    />
                    <label className="mt-4 text-xl font-medium">Description</label>
                    <Field  as="textarea"
                        className="shadow-xl rounded-xl bg-white w-full px-3 py-2"
                        name="description"
                        id="description"
                        
                        placeholder="Provide description for your product"
                    />
                    <label className="mt-4 text-xl font-medium font-sans">Price</label>
                    <Field 
                        className="shadow-xl rounded-xl bg-white w-full px-3 py-2"
                        name="price"
                        id="price"
                        
                        placeholder="Enter the product price"
                    />
                    <label className="mt-4 text-xl font-medium">Stock</label> 
                    <Field 
                        className="shadow-xl rounded-xl bg-white w-full px-3 py-2"
                        name="stock"
                        id="stock"
                        placeholder="Enter the product stock"
                    /> 
                    <button className="mt-4 bg-green-600 px-3 py-2 rounded-xl" type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateProduct