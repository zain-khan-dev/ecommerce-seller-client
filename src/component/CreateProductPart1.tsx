import {Field} from "formik"
import {TOTAL_PHOTOS_ALLOWED} from "../utils/Constants"


interface Props {
    uploadedImages: File[]
    setUploadedImages: React.Dispatch<React.SetStateAction<File[]>>
}


const CreateProductPart1:React.FC<Props> = ({uploadedImages, setUploadedImages}) => {
    

    const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files
        if(files && files.length > 0){
            const filteredImages = [...uploadedImages]

            filteredImages.push(files[0])
            setUploadedImages(filteredImages)
        }
        // upload image here
    }
    
    return (

        <div className="flex-1 mx-2">
            <h1 className="text-2xl font-bold my-4">Step 1</h1>
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
            <label className="mt-4 text-xl font-medium font-sans">Discount</label>
            <Field 
                className="shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="discount"
                id="discount"  
                type="number"
                max={99}
                min={0}
                placeholder="Enter the discount (default 0)"
            />
            <div>The effective product price will be {}</div>
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
            <div className="mt-4 flex flex-col items-center tex-center justify-center">
                {[...Array(TOTAL_PHOTOS_ALLOWED)].map((val, idx)=>
                <input  onChange={handleFileUpload} type="file" className={"text-center justify-center items-center " + (idx!=uploadedImages.length?"hidden":"block")} />)}
            </div>
            <div className="flex flex-row my-4">
                {uploadedImages.map((file:File)=><img width={"50px"} height={"50px"} src={URL.createObjectURL(file)} />)}
            </div>
        </div>
    )

}


export default CreateProductPart1