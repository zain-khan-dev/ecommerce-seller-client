import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import {postData} from "../utils/utilityFunc"
import { Label } from '@mui/icons-material';
import { FormLabel } from '@mui/material';

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}


interface OtherProps {
  message: string;
}


interface SellerDetail {
    username:string;
    password:string
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>

      <FormLabel>Enter Email:</FormLabel>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}<br />

      <FormLabel>Enter Password:</FormLabel>
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}<br />


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
      const sellerDetail:SellerDetail = {username:values.email, password:values.password}
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
    // do submitting things
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm message="Sign up" />
  </div>
);

export default Basic;