import { Formik, Field, Form } from 'formik';
import {UserLoginDetails} from "../utils/Constants"
import {postData} from "../utils/utilityFunc"

const Basic = () => {

  
    return (

      <div>
        <h1>Login</h1>
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
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /><br />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="jane@acme.com"
              type="password"
            /><br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      )
};
export default Basic