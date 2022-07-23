import React, { useState, useEffect, PropsWithChildren } from "react";
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  extraProps?: TextFieldProps;
}

export default function AppInput(props: PropsWithChildren<Props>) {
  return (
    <TextField
      id="outlined-required"
      label={props.label}
      defaultValue=""
      placeholder={props.placeholder ?? ""}
      name={props.name}
      onChange={  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => props.onChange(event)}
      {...props.extraProps}
    />
  )
}