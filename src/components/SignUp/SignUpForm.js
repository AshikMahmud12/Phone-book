import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignUp/SignUp.css";

const SignUpForm = () => {
  return (
    <div className="card border-0 shadow p-4">
      <h1 className="mt-4 mb-4">SignUp Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters").min(3, "must be 3 character" )
            .required("Please Enter your First Name"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less").min(3, "must be 3 character" )
            .required("Please Enter your Last Name"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Please Enter your Email"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting, isSubmitting }) => {
          isSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            isSubmitting(false);
          }, 400);
        }}
      >
        <Form >
        <div className="form-group d-flex">
          <label htmlFor="firstName" className="mr-5">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage  name="firstName" />
          </div>

          <div className="form-group d-flex">
          <label htmlFor="lastName" className="mr-5">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          </div>

          <div className="form-group d-flex">
          <label htmlFor="email" className="mr-3">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />            
          </div>

          <div className="form-group d-flex">
         <Field name="acceptedTerms" type="checkbox" />
          <label htmlFor="acceptedTerms" className="mr-3">
            I accept the terms and conditions
          </label>   
          <ErrorMessage name="acceptedTerms" />
          <br />
          </div>
          <button className="btn btn-warning" type="submit">Submit</button>
          
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;