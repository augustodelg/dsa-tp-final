import { Box, Button } from "@mui/material";
import React, { useState, useEffect, PropsWithChildren } from "react";
import GenericService from "../../../services/GenericService";
import AppInput from "../../general/AppInput";
interface Props {

}

export default function SteganographyStep(props: PropsWithChildren<Props>) {

  const [value, setValue] = useState("");

  const handleSubmit = async() => {
    const response = await GenericService.validateFlag(0, value);
    if (!response.success) {
      alert(`“No puedes hacer grandes cosas si estás distraído por cosas pequeñas” \n Lio Messi`)
    }
  }

  return (
    <Box>
      <Box component='img' 
        sx={{
          borderRadius: '3em',
          height: 500,
          width: 500,
        }}
        src={require("../../../assets/messirve_v3.jpg")}
      />
      <Box style={{ marginTop: '2em', marginLeft: '1em', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <AppInput 
          placeholder="Messi Fachero"
          onChange={(event) => setValue(event.target.value)}
          name=""
          label="👀"
        />
        <Button onClick={() => handleSubmit() }>
          OK
        </Button>
      </Box>
    </Box>
  )

}