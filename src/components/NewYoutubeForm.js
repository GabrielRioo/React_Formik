import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "Gabriel@gmail.com",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data: ", values);
  console.log("Submit props: ", onSubmitProps)
  onSubmitProps.setSubmitting(false)
};

// yarn add yup - validação usando Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }

  return error;
};

function NewYoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
      // validateOnMount
    >
      {(formik) => {
        console.log("Formik props: ", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" name="channel" id="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  console.log("Field render");
                  const { field, form, meta } = props;
                  // console.log('PROPS:> ', props)
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" name="social.facebook" id="facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" name="social.twitter" id="twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" name="phoneNumbers[1]" id="secondaryPh" />
            </div>

            <div className="form-control">
              <label htmlFor="phNumbers">List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  // console.log('Filed array: ', fieldArrayProps)
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  console.log("Form errors: ", form.errors);

                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                          <button type="button" onClick={() => push(index)}>
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="button" onClick={() => formik.validateField('comments')}>Validate comments</button>
            <button type="button" onClick={() => formik.validateForm()}>Validate all</button>

            <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit comments</button>
            <button type="button" onClick={() => formik.setTouched({
              name: true,
              email: true,
              channel: true,
              comments:true
            })}>Visit all</button>

            {/* <button className="submit" disabled={!(formik.isValid)} type="submit"> */}
            <button className="submit" disabled={formik.isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewYoutubeForm;
