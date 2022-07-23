import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import React, { useState, useEffect, PropsWithChildren } from "react";
import XSSStep from "./XSSStep/components/XSSStep";
import SQLInjectionStep from "./SQLInjectionStep/SQLInjectionStep";
import { Container } from "@mui/material";

interface Props {

}

export default function GeneralStepper(props: PropsWithChildren<Props>) {
  const [activeStep, setActiveStep] = React.useState<number>(1);

  const appSteps: Array<JSX.Element> = [
    <SQLInjectionStep

    />,
    <XSSStep

    />,
    // <SteganographyStep 

    // />
  ]

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '3em' }}>
      <Box component="div">
        <Stepper activeStep={activeStep}>
          {
            appSteps.map((appStep) => {
              return (
                <>
                </>
              )
            })
          }

          {
            appSteps[activeStep]
          }
        </Stepper>
      </Box>
    </Container>
  )
}