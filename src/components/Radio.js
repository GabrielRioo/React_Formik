import React from 'react'
import {Field, ErrorMessage} from 'formik'

function Radio(props) {
  const { name, label, ...rest } = props

  return (
    <div className="form-control"> 
      <label htmlFor={name}>{label}</label>
      <Field as='radio' name={name} id={name} {...rest}/>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Radio