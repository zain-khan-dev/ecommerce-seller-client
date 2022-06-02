import { useAuthenticator } from "../utils/utilityFunc"

const Profile = () => {


    const isLogged = useAuthenticator()

    return (
        <div>Seller profile will be shown here</div>
    )
}

export default Profile