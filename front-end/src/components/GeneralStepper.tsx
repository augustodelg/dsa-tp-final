import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import React, { useState, useEffect, PropsWithChildren } from "react";
import XSSStep from "./XSSStep/components/XSSStep";
import SQLInjectionStep from "./SQLInjectionStep/SQLInjectionStep";

interface Props {

}

export default function GeneralStepper(props: PropsWithChildren<Props>) {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const appSteps: Array<JSX.Element> = [
    <SQLInjectionStep

    />,
    <XSSStep

    />,
    // <SteganographyStep 

    // />
  ]

  return (
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
      </Stepper>
    </Box>
  )
}