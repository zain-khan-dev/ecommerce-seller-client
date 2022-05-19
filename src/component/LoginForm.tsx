import { Formik, Field, Form } from 'formik';
import {UserLoginDetails} from "../utils/Constants"
import {postData} from "../utils/utilityFunc"

const Basic = () => {

  
    return (

      <div className="width-full max-w-xs bg-white shadow-md mx-auto p-4 rounded-xl">
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
                
            })
            .catch((e) => {
                console.log(e)
            })
          }}
        >
          <Form className="rounded flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <Field className="shadow w-full px-2 py-3 mb-3"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /><br />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <Field className="shadow w-full px-2 py-3 mb-3"
              id="password"
              name="password"
              placeholder="jane@acme.com"
              type="password"
            /><br />
            <button className="bg-blue-400 rounded-xl py-2 px-3 text-white" type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      )
};
export default Basic