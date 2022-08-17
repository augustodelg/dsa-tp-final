import { Button, Grid, Paper, Typography } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
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
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ width: "100%", margin: "0 auto"}}
      >
        <Grid item xs={12}>
          {response && <Typography variant="h6">
              <Paper sx={{p: 3, borderRadius: '1em'}}>
                {response}
              </Paper>
              </Typography>}
        </Grid>
        <Grid item xs={12}>
            <Button onClick={(event) => getData()} variant="outlined">Intentar</Button>
        </Grid>
      </Grid>
    
  );
}
