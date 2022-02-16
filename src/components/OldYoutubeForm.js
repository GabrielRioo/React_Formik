import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "Gabriel",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data: ", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) errors.name = "Required";

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) errors.channel = "Required";

  return errors;
};

// yarn add yup - validação usando Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format!').required('Required!'),
  channel: Yup.string().required('Required!'),
})

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
  console.log("Form values: ", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          
        />
        {formik.touched.name && formik.errors.name ? (
          <span className="error">{formik.errors.name}</span>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <span className="error">{formik.errors.channel}</span>
        ) : null}
      </div>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default OldYoutubeForm;
