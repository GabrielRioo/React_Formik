import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButton(props) {
  const { name, label, options, ...rest } = props

  return (
    <div className="form-control"> 
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            console.log('Field:', field)
            return options.map(option => {
              console.log('Option ', option)
              console.log('Options Map ', options)
              return (
                <React.Fragment key={option.key}>
                  <input 
                    type="radio" 
                    id={option.value} 
                    {...field} 
                    value={option.value} 
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              ) 
            })
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButton