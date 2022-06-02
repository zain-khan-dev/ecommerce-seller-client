import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../reducer/store"
import { useAuthenticator } from "../utils/utilityFunc"

const Dashboard = () => {


    const isLogged = useAuthenticator()

    
    return (
        <div>THis is a dashboard</div>
    )
}

export default Dashboard