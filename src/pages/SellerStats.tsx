import { useAuthenticator } from "../utils/utilityFunc"

const SellerStats = () => {


    const isLogged = useAuthenticator()

    return (
        <div>Seller stats will be displayed here</div>
    )
}

export default SellerStats