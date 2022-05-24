import { Formik, Field, Form } from "formik"
import {useState} from "react"
import { string } from "yup"
import { postAuthData } from "../utils/utilityFunc"
import { TOTAL_PHOTOS_ALLOWED } from "../utils/Constants"
import CreateProductPart1 from "./CreateProductPart1"
import CreateProductPart2 from "./CreateProductPart2"


const CreateProduct = () => {


    const [uploadedImages, setUploadedImages] = useState<File[]>([])


    return(

        <div className="width-full md:max-w-3xl max-w-xl bg-white shadow-md mx-auto p-4 rounded-xl md:mt-10 mt-2">
        <Formik
            initialValues={{
                name:'',
                description:'',
                price: '',
                stock: '',
                category:'',
                discount: '',
                width: '',
                height: '',
                metric: '',
                model: '',
                release_date: '',
                manufacturer_name: ''
            }}
            onSubmit={(values)=>{
                console.log(values)
                var regexp = /^\d+\.\d{0,2}$/; // regex to match decimal
                console.log(values.price)
                console.log(values.category)
                if(regexp.test(values.price)){
                    const localPrice = parseFloat(values.price)
                    postAuthData("product/", 
                    {
                        name:values.name, 
                        description:values.description,
                        stock:values.stock,
                        price:values.price, 
                        category:values.category, 
                        images:uploadedImages,
                        discount:values.discount,
                        width:values.width,
                        height:values.height,
                        metric:values.metric,
                        model:values.model,
                        release_date:values.release_date,
                        manufacturer_name: values.manufacturer_name
                    })
                    .then((result)=>console.log(result))
                    .catch((e)=>alert("Difficult" + e))
                }
                else{
                    alert("Enter correct price")
                }
            }}
            >   
                <Form className="flex flex-col rounded text-center">
                    <h1 className="md:text-3xl text-3xl font-semibold mb-2">Create Product</h1>
                        <div className="flex md:flex-row flex-col">
                            <CreateProductPart1  uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
                            <div className="divide-y hidden md:block border-2 border-yellow-600"></div>
                            <CreateProductPart2 />
                        <div>
                        </div>
                    </div>
                    <button className="mt-4 bg-green-600 px-3 py-2 rounded-xl text-white text-xl" type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreateProduct