import React from 'react';
import { useField } from 'formik';

import { Label, Input, Error } from './styles'

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} error={meta.error} />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </>
  );
};
export default CustomInput;
