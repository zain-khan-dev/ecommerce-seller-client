import axios, { AxiosResponse, AxiosPromise, AxiosInstance, AxiosRequestHeaders } from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setProduct } from "../reducer/ProductSlice"
import { RootState } from "../reducer/store"
import {BASE_URL, ProductSchema} from "./Constants"

export const getAxiosInstance = ():AxiosInstance    => {

    const axiosInstance = 
        axios.create({
            baseURL:BASE_URL,
            headers: { "Content-Type": "multipart/form-data", "Authorization":`Bearer ${localStorage.getItem("access_token")}`}
        })
       
       
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            const originalRequest = error.config;
            console.log(originalRequest)
            if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
                const refresh_token = localStorage.getItem('refresh_token');
                console.log(refresh_token)
                return axios
                    .post('http://www.localhost:8000/api/token/refresh/', {refresh: refresh_token})
                    .then((response) => {

                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);
    
                        // axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
                        originalRequest.headers['Authorization'] = "Bearer " + response.data.access;
    
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => {
                        console.log("refresh token has expired")
                        console.log(err)
                        return Promise.reject(err);
                    });
            }
            return Promise.reject(error);
        }
    )
    return axiosInstance
}




// export const getProducts = async ():<AxiosResponse<any, any> => {
//     const result = await getAuthData("product")
//     return result.data
// }

export const getProducts =  async ():Promise<AxiosResponse<any, any>> => {
    return await getAuthData("product")
}


export const putAuthData = async (putURL:string, data:Object):Promise<AxiosResponse<any,any>> => {
    return await getAxiosInstance().put(putURL, data)
}


export const postAuthData = async (postURL:string, data:Object):Promise<AxiosResponse<any,any>> => {
    return await getAxiosInstance().post(postURL, data)
}


export const postData = async (postURL:string, data:Object):Promise<AxiosResponse<any,any>> => {
    return await axios.post(postURL, data)
}


export const getAuthData = async(getURL:string):Promise<AxiosResponse<any,any>> => {


    return await getAxiosInstance().get(getURL)

}


export const getData = async(getURL:string):Promise<AxiosResponse<any,any>> => {


    return await axios.get(getURL)

}



export const deleteData = async(deleteURL:string, id:number):Promise<AxiosResponse<any,any>> => {
    return await getAxiosInstance().delete(`${deleteURL}${id}`)
}



export const useAuthenticator = () => {

    const isLogged = useSelector((state:RootState)=>state.logged.isLogged)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLogged)
        navigate("/") 

    }, [isLogged])
    
    return isLogged

}

export const useProductFetch = () => {

    const dispatch = useDispatch()

    let productsList:ProductSchema[] = useSelector((state:RootState)=>state.products.productList)


    if(productsList.length === 0){
        getProducts()
            .then((result)=>{
            productsList = result.data as ProductSchema[]
            dispatch(setProduct(productsList))
        })
        .catch((e)=>{
            console.log("error occured")
            return []
        })
    }
    else{
        console.log("using cached version")
    }
    return productsList

}