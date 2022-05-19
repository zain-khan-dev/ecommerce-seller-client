import { Formik, Field, Form } from 'formik';
import {UserLoginDetails} from "../utils/Constants"
import {postData} from "../utils/utilityFunc"
import { UserRegisterDetails } from '../utils/Constants';

const RegisterForm = () => {
    return (

      <div className="width-full max-w-md bg-white shadow-md mx-auto p-4 rounded-xl md:mt-10 mt-2">
        <h1 className="text-3xl text-center">Register</h1>
        <Formik
          initialValues={{
            fullname:'',
            phone_number:'',
            address: '',
            email: '',
            password: ''
          }}
          onSubmit={async (values) => {
            const sellerDetail:UserRegisterDetails = {user:{username:values.email, password:values.password}, address:values.address, name:values.fullname,phone_number:values.phone_number}
            console.log(sellerDetail)
            postData("http://localhost:8000/ecommerce/seller/", sellerDetail)
            .then((result) => {
                console.log(result)
            })
            .catch((e) => {
                console.log(e)
            })
          }}
        >
          <Form className="rounded flex flex-col">
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="fullname">Full Name</label>
            <Field className="shadow bg-gray-100 w-full px-2 py-3 mb-3 rounded-xl"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
              type="fullname"
            /><br />
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">Email</label>
            <Field className="shadow bg-gray-100 w-full px-2 py-3 mb-3 rounded-xl"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /><br />
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="address">Address</label>
            <textarea className="shadow bg-gray-100 w-full px-2 py-3 mb-3 rounded-xl"
              id="address"
              name="address"
            /><br />
            
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="password">Password</label>
            <Field className="shadow w-full px-2 py-3 mb-3 rounded-xl bg-gray-100"
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
export default RegisterForm