import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useRef, useState } from "react";
import AppInput from "../general/AppInput";
import TableUser from "./components/TableUser/TableUser";

export default function SQLInjectionStep() {
  let [usernameInput, setUsernameInput] = useState<string>("");
  function changeRef(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setUsernameInput(e.target.value);
  }

  return (
    
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ width: "80vw", margin: "0 auto"}}
      >
        <Grid item xs={12}>
          <AppInput
            label="Buscador por username"
            name="username"
            placeholder="DSAuser"
            onChange={changeRef}
          />
        </Grid>
        <Grid width={'100%'} item xs={12} >
          <TableUser filterUsername={usernameInput} />
        </Grid>
      </Grid>
    
  );
}
