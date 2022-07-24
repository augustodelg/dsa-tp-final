import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import React, { PropsWithChildren, useState } from "react";
import GenericService from "../../../services/GenericService";
import AppInput from '../../general/AppInput';

interface Props {
}

const steghanographyValue = `dato:21232f297a57a5a743894a0e4a801fc3`;

export default function XSSStep(props: PropsWithChildren<Props>) {
  const [inputValue, setInputValue] = useState<string>("valor");
  const [responseValue, setResponseValue] = useState<string>("");
  
  const handleSubmit = async(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const response = await GenericService.postXss(inputValue);
    setResponseValue(response.payload!);
    if (response.payload?.includes("flag{")) {
      alert("Los logs son importantes tambien 👀")
      console.log(steghanographyValue);
    }
  }

  const createMarkup = () => {
    return {__html: responseValue};
  }

  return (
    <Box component='div'>
      <Box component='div'>
          <div>
            Hola :)
          </div>
          <div dangerouslySetInnerHTML={createMarkup()}/>

      </Box>
      <Box component='div' style={{ marginTop: '1em' }}>
        <AppInput
          placeholder="Podes poner tu nombre 👀"
          name="inputValue"
          label=""
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Box>
      <Box component='div' style={{ marginTop: '1em' }}>
        <Button onClick={(event) => handleSubmit(event)} variant="outlined">OK</Button>
      </Box>
    </Box>
  )
}