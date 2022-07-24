import { Button, Grid, Typography } from "@mui/material";
import { Fragment, PropsWithChildren, useEffect, useRef, useState } from "react";
import GenericService from "../../services/GenericService";

interface Props {
}

export default function CookieStep(props: PropsWithChildren<Props>) {
  const [response, responseInput] = useState<string>('');

  async function getData() {
    const result = await GenericService.getCookies();
    responseInput(result.payload!);
  }

  useEffect(() => {
  }, [response])
  

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
          {response && <Typography variant="h6">{response}</Typography>}
        </Grid>
        <Button onClick={(event) => getData()} variant="outlined">Intentar</Button>
      </Grid>
    
  );
}
