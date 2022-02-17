import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const checkboxOptions = [
    { key: "Hamburguer", value: "hamburguer" },
    { key: "Pizza", value: "pizza" },
    { key: "Cachorro Quente", value: "cachorroQuente" },
  ];
  const radioOptions = [
    { key: "Masculino", value: "Masculino" },
    { key: "Feminino", value: "Feminino" },
  ];
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "RJ", value: "Rio de Janeiro" },
    { key: "SP", value: "Sao Paulo" },
    { key: "MG", value: "Minas Gerais" },
    { key: "ES", value: "Espirito Santo" },
  ];
  const initialValues = {
    email: "",
    decription: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data: ", values);
    console.log("Saved data ", JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="textarea"
            type="text"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Estado"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Sexo"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="Comida Favorita"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <FormikControl
            control="date"
            label="Birthday"
            name="birthDate"
          />
          <button className="submit" type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
