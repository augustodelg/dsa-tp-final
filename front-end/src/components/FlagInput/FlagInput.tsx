import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { PropsWithChildren, useState } from "react";
import GenericService from "../../services/GenericService";
import AppInput from "../general/AppInput";

interface Props {
  activeStep: number;
  onSuccess: () => void;
}

export default function FlagInput(props: PropsWithChildren<Props>) {

  const [value, setValue] = useState("");
  const { activeStep } = props;

  const handleSubmit = async() => {
    const response = await GenericService.validateFlag(activeStep, value);
    if (response.success) {
      alert("Claro que si ")
      setValue("")
      props.onSuccess()
    }
    else {
      alert("Nop")
    }
  }

  return (
    <Box component='div' style={{ marginBottom: '1em', justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box>
          <AppInput
            placeholder={`Flag del step ${activeStep +1} `}
            name="flag"
            label=""
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Box style={{ marginLeft: '1em' }}>
          <Button onClick={() => handleSubmit()} variant="contained">CHECK</Button>
        </Box>
      </Box>
    </Box>
  )
}