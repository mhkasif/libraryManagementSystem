import { TextField,FormHelperText } from "@material-ui/core";
import React from 'react'
export const renderTextField = ({
  label,
  input,
  type='text',
  meta: { touched, invalid,error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched&&error}
    {...input}
  type={type}
    {...custom}
    />
)