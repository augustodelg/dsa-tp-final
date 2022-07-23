import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, PropsWithChildren, useRef, useState } from "react";
import AppInput from "../general/AppInput";
import TableUser from "./components/TableUser/TableUser";

interface Props {
}

export default function SQLInjectionStep(props: PropsWithChildren<Props>) {
  let [usernameInput, setUsernameInput] = useState<string>("");

  return (
    
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ width: "100%", margin: "0 auto"}}
      >
        <Grid item xs={12}>
          <AppInput
            label="Buscador por username"
            name="username"
            placeholder="DSAuser"
            onChange={(event) => setUsernameInput(event.target.value) }
          />
        </Grid>
        <Grid width={'100%'} item xs={12} >
          <TableUser filterUsername={usernameInput} />
        </Grid>
      </Grid>
    
  );
}
