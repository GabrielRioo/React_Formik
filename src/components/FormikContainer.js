import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required')
  })
  const onSubmit = values => console.log("Form data: ", values)
  
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema}>
      {formik => 
        <Form>
          <FormikControl 
            control='input' 
            type='email' 
            label='Email' 
            name='email' />
          <button className="submit" type="submit" onClick={onSubmit}>Submit</button>
        </Form>}
    </Formik>
  );
}

export default FormikContainer;
