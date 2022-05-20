import { Formik, Field, Form } from 'formik';
import {UserLoginDetails} from "../utils/Constants"
import {postData} from "../utils/utilityFunc"
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../reducer/LoginSlice';
import { useNavigate } from 'react-router-dom';
import MyModal from './Modal';

const Basic = () => {

  
  const dispatch = useDispatch()
  const navigate = useNavigate()

    return (

      <div className="width-full max-w-xs bg-white shadow-md mx-auto p-4 rounded-xl md:mt-10 mt-2">
        <h1 className="text-3xl text-center">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (values) => {
            const sellerDetail:UserLoginDetails = {username:values.email, password:values.password}
            console.log(sellerDetail)
            postData("http://localhost:8000/api/token/", sellerDetail)
            .then((result) => {
                console.log(result.data["access"])
                localStorage.setItem("access_token", result.data["access"])
                localStorage.setItem("refresh_token", result.data["refresh"])
                dispatch(setLoggedState(true))
                navigate("/dashboard")
                
            })
            .catch((e) => {
                console.log(e)
                alert("There was a problem logging in ")
            })
          }}
        >
          <Form className="rounded flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <Field className="shadow bg-gray-100 w-full px-2 py-3 mb-3 rounded-xl"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /><br />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <Field className="shadow w-full px-2 py-3 mb-3 rounded-xl bg-gray-100"
              id="password"
              name="password"
              placeholder="jane@acme.com"
              type="password"
            /><br />
            <button className="bg-blue-400 rounded-xl py-2 px-3 text-white" type="submit">Submit</button>
            <div className="block text-center mt-2 underline text-blue-800 text-sm">Forget Password</div>
          </Form>
        </Formik>
      </div>
      )
};
export default Basic