import axios, { AxiosResponse, AxiosPromise, AxiosInstance, AxiosRequestHeaders } from "axios"
import {BASE_URL} from "./Constants"



interface axiosInstanceConfig {
    baseURL:string;
    headers:AxiosRequestHeaders;
}


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







export const postData = async (postURL:string, data:Object):Promise<AxiosResponse<any,any>> => {


    return await getAxiosInstance()
    .post(postURL, data)

    // return await axios({
    //     method:"post",
    //     url:postURL,
    //     data:data,
    //     headers: { "Content-Type": "multipart/form-data"},
    // })
}


export const getData = async(getURL:string):Promise<AxiosResponse<any,any>> => {


    return await getAxiosInstance()
    .get(getURL)

    // return await axios({
    //     method:"get",
    //     url:getURL,
    //     headers: { }
    // })

}



export const deleteData = async(deleteURL:string, id:number):Promise<AxiosResponse<any,any>> => {


    return await getAxiosInstance()
    .delete(`${deleteURL}${id}`)

    // return await axios({
    //     method:"delete",
    //     url:`${deleteURL}${id}`,
    //     headers: { "Authorization":`Bearer ${localStorage.getItem("access_token")}`}
    // })

}

