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
                stock: '',
                category:''
            }}
            onSubmit={(values)=>{
                var regexp = /^\d+\.\d{0,2}$/; // regex to match decimal
                console.log(values.price)
                console.log(values.category)
                if(regexp.test(values.price)){
                    const localPrice = parseFloat(values.price)
                    postAuthData("product/", {name:values.name, description:values.description,stock:values.stock,price:values.price, category:values.category})
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
                    <label className="mt-4 text-xl font-medium">Category</label>
                    <Field 
                        as="select" 
                        name="category"
                        id="category"
                        className="bg-white w-full px-3 py-2 rounded-xl shadow-xl font-sans">
                        <option value='Appli'>Appliances</option>
                        <option value='Apps '>Apps & Games</option>
                        <option value='Arts,'>Arts, Crafts, & Sewing</option>
                        <option value='Autom'>Automotive Parts & Accessories</option>
                        <option value='Baby'>Baby</option>
                        <option value='Beaut'>Beauty & Personal Care</option>
                        <option value='Books'>Books</option>
                        <option value='CDs &'>CDs & Vinyl</option>
                        <option value='Cell '>Cell Phones & Accessories</option>
                        <option value='Cloth'>Clothing, Shoes and Jewelry</option>
                        <option value='Colle'>Collectibles & Fine Art</option>
                        <option value='Compu'>Computers</option>
                        <option value='Elect'>Electronics</option>
                        <option value='Garde'>Garden & Outdoor</option>
                        <option value='Groce'>Grocery & Gourmet Food</option>
                        <option value='Handm'>Handmade</option>
                        <option value='Healt'>Health, Household & Baby Care</option>
                        <option value='Home '>Home & Kitchen</option>
                        <option value='Indus'>Industrial & Scientific</option>
                        <option value='Lugga'>Luggage & Travel Gear</option>
                        <option value='Movie'>Movies & TV</option>
                        <option value='Music'>Musical Instruments</option>
                        <option value='Offic'>Office Products</option>
                        <option value='Pet S'>Pet Supplies</option>
                        <option value='Sport'>Sports & Outdoors</option>
                        <option value='Tools'>Tools & Home Improvement</option>
                        <option value='Toys '>Toys & Games</option>
                        <option value='Video'>Video Games</option>

                    </Field>
                    <button className="mt-4 bg-green-600 px-3 py-2 rounded-xl" type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateProduct