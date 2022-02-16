import React from "react";
import Input from './Input'
import Textarea from './Textarea'
import DropDown from './DropDown'
import RadioButton from './RadioButton'

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea": return <Textarea {...rest} />
    case "select": return <DropDown {...rest} />
    case "radio": return <RadioButton {...rest} />
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
