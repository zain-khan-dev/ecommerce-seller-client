import {Field} from "formik"

const CreateProductPart2 = () => {

    // console.log()

    //    measure_type = models.CharField(max_length=100, choices=MEASURE_TYPES)
    //model_no = models.CharField(max_length=50)
    //release_date = models.DateField(default=datetime.today)
    //manufacturer_name = models.CharField(max_length=100)
    return (
        <div className="flex-1 mx-2">
            <h1 className="text-2xl font-bold my-4">Step 2</h1>
            <div className="flex flex-row justify-center items-center my-4">
                <label className="md:text-lg">Dimension: </label>
                <Field 
                    className="md:mx-2 shadow-xl rounded-xl bg-white w-[100px] px-3 py-2"
                    name="width"
                    id="width"
                    type="number"
                    placeholder="width"
                />
                X
                <Field 
                    className="shadow-xl rounded-xl bg-white w-[100px] px-3 py-2 md:mx-2"
                    name="height"
                    id="height"
                    type="number"
                    placeholder="height"
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
        </div>
    )

}

export default CreateProductPart2