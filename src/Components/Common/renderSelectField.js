import React from 'react';
import { InputLabel, FormControl,Select, FilledInput } from '@material-ui/core';
export const renderSelectField = ({
    input,
    label,
    lab,
    name,
    style,
    id,

    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl variant="filled" style={style} error={touched && error}>
      <InputLabel htmlFor="filled-category-native-simple">{lab}</InputLabel>
      <Select
        native
        {...input}

        {...custom}
        input={
            <FilledInput
            name={name}
            id={id}
            />
          }
      >
        {children}
      </Select>
    </FormControl>
  )