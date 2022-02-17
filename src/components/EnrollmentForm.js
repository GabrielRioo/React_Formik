import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function EnrollmentForm() {
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data ", values);
  };

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "vue" },
  ];

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl control="textarea" label="Bio" name="bio" />

            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />

            <FormikControl
              control="checkbox"
              label="Your Skills"
              name="skills"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Course date"
              name="courseDate"
            />

            <button className="submit"type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
