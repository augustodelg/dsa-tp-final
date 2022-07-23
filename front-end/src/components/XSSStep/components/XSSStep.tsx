import React, { useState, useEffect, PropsWithChildren } from "react";
import Box from '@mui/material/Box';
import AppInput from '../../general/AppInput';
import { Button } from "@mui/material";

interface Props {

}

const flag = "";

export default function XSSStep(props: PropsWithChildren<Props>) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    eval(inputValue);
    if (inputValue.includes("script")) {
      
      console.log(`Util data: ${flag}`)
    }
  }

  return (
    <>
      <Box component='div'>

      </Box>
      <Box component='div'>
        <AppInput
          placeholder="Intenta algo :)"
          name="inputValue"
          label=""
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Box>
      <Box>
        <Button onClick={(event) => handleSubmit(event)} variant="outlined">Search</Button>
      </Box>
    </>
  )
}