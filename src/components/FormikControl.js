import React from "react";
import Input from './Input'
import Textarea from './Textarea'
import DropDown from './DropDown'

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea": return <Textarea {...rest} />
    case "select": return <DropDown {...rest} />
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
