import {useState} from "react"
import {Field} from "formik"    
import {AiFillCloseCircle} from "react-icons/ai"

interface Props {
    productFeatures: string[]
    setProductFeatures: React.Dispatch<React.SetStateAction<string[]>>
}

const ProductFeature:React.FC<Props> = ({productFeatures, setProductFeatures}) => {



    const [feature, setFeature] = useState<string>("")

    const handleFeatureAdd = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const newProductFeatures = [...productFeatures]
        newProductFeatures.push(feature)
        setFeature("")
        setProductFeatures(newProductFeatures)
    }

    const handleFeatureRemove = (idx:number) => {

        const newProductFeatures = productFeatures.filter((cval, cidx) => cidx !== idx)

        setProductFeatures(newProductFeatures)
    }


    return(
        <div>
            <label className="text-xl font-medium font-sans">Features (Add Min 3)</label>
            <div className="flex flex-col items-center mt-2">
                <input className="border-2 border-black" type="text" value={feature}  onChange={(e)=>setFeature(e.target.value)}/>
                <button onClick={handleFeatureAdd} className="bg-blue-600 w-fit p-2 text-sm my-2 text-white rounded-xl">Add Feature</button>
            </div>
            <div className="list-disc list-inside text-left mx-2">
                {productFeatures.map((feature, idx)=>
                    <div className="w-full flex flex-row justify-between">
                        <div className="mr-2">
                            <span className="font-bold">{idx+1}. </span> {feature}
                        </div>
                        <div className="ml-2">
                            <AiFillCloseCircle className="text-xl text-red-500 hover:cursor-pointer" onClick={()=>handleFeatureRemove(idx)} />
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default ProductFeature