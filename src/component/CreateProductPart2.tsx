import {Field} from "formik"
import ProductFeature from "./ProductFeature"
import countries from "../asset/country_list.json"



const CreateProductPart2 = () => {

    // console.log()

    //    measure_type = models.CharField(max_length=100, choices=MEASURE_TYPES)
    //model_no = models.CharField(max_length=50)
    //release_date = models.DateField(default=datetime.today)
    //manufacturer_name = models.CharField(max_length=100)
    return (
        <div className="flex-1 mx-2">
            <h1 className="text-2xl font-bold my-4">Step 2</h1>
            <label className="text-xl font-mediym font-sans">Dimension </label>
            <div className="flex flex-row justify-center items-center my-4">
                <Field 
                    className="md:mx-2 shadow-xl rounded-xl bg-white w-full  px-3 py-2"
                    name="width"
                    id="width"
                    type="number"
                    placeholder="width"
                    min={1}
                />
                X
                <Field 
                    className="shadow-xl rounded-xl bg-white w-full px-3 py-2 md:mx-2"
                    name="height"
                    id="height"
                    type="number"
                    placeholder="height"
                    min={1}
                />
                <Field as="select" className="ml-2 bg-white" name="metric" id="metric">
                    <option value="mm">millimeter</option>
                    <option value="cm">centimeter</option>
                    <option value="m">meter</option>
                </Field>
            </div>
            <label className="text-xl font-medium font-sans">Model No</label>
            <Field 
                className="my-4 shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="model"
                id="model"
                placeholder="Enter the product price"
            />
            <label className="text-xl font-medium font-sans">Realease Date</label>
            <Field 
                className="my-4 shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="release_date"
                id="release_date"
                type="date"
                placeholder="Enter the release date"
                min={new Date().toISOString().split('T')[0]}
            />
            <label className="text-xl font-medium font-sans">Manufacturer Name</label>
            <Field 
                className="my-4  shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="manufacturer_name"
                id="manufacturer_name"
                placeholder="Enter Manufacturer Name"
            />
            <label className="text-xl font-medium font-sans">Expiry Date (If any)</label>
            <Field 
                className="my-4  shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="expiry_date"
                id="expiry_date"
                type="date"
                placeholder="Enter Expiry Date"
            />
            <label className="text-xl font-medium font-sans">Country of Origin</label>
            <Field 
                as="select"
                className="my-4  shadow-xl rounded-xl bg-white w-full px-3 py-2"
                name="country_of_origin"
                id="country_of_origin"
                placeholder="Enter country of origin"
            >
                {countries.map((country)=><option key={country.value}>{country.label}</option>)}
            </Field>
        </div>
    )

}

export default CreateProductPart2