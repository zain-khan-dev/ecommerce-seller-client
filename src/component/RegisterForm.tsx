
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import {postData} from "../utils/utilityFunc"
import {UserRegisterDetails} from "../utils/Constants"

// Shape of form values
interface FormValues {
  email: string;
  password: string;
  address:string;
  phone_number:string;
  name:string
}

interface OtherProps {
  message: string;
}



// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>

      <label>Enter Name: </label>
      <Field type="text" name="name" />
      {touched.name && errors.name && <div>{errors.name}</div>}<br />



      <label>Enter Email:</label>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}<br />

      <label>Enter Password:</label>
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}<br />


      <label>Enter Address:</label>
      <Field type="text" name="address" />
      {touched.address && errors.address && <div>{errors.address}</div>}<br />


      <label>Enter Phone Number:</label>
      <Field type="text" name="phone_number" />
      {touched.phone_number && errors.phone_number && <div>{errors.phone_number}</div>}<br />



      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
      address:'',
      phone_number:'',
      name: ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!values.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },



  handleSubmit: values => {
      const sellerDetail:UserRegisterDetails = {user:{username:values.email, password:values.password}, address:values.address, name:values.name,phone_number:values.phone_number}
      console.log(sellerDetail)
      postData("http://localhost:8000/ecommerce/seller/", sellerDetail)
      .then((result) => {
          console.log(result)
      })
      .catch((e) => {
          console.log(e)
      })
    // do submitting things
  },
})(InnerForm);

// Use <MyForm /> wherevs
const RegisterForm = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm message="Sign up" />
  </div>
);

export default RegisterForm;