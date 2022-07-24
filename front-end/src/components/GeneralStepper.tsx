import { Container, Step, StepLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import React, { PropsWithChildren } from "react";
import { stepperLabel } from "../interfaces/AppStep";
import CookieStep from "./CookieStep/CookieStep";
import AppInput from "./general/AppInput";
import SQLInjectionStep from "./SQLInjectionStep/SQLInjectionStep";
import SteganographyStep from "./SteganographyStep/components/SteganographyStep";
import XSSStep from "./XSSStep/components/XSSStep";


interface Props {

}

export default function GeneralStepper(props: PropsWithChildren<Props>) {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const updateCurrentStep = () => {
    setActiveStep(activeStep + 1)
  }

  const appSteps: Array<JSX.Element> = [
    <SQLInjectionStep
      advanceToNextStep={() => setActiveStep(activeStep + 1)}
    />,
    <CookieStep  advanceToNextStep={() => setActiveStep(activeStep + 1)}/>
    ,
    <XSSStep
      advanceToNextStep={() => setActiveStep(activeStep + 1)}
    />,
    <SteganographyStep

    />
  ]

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '3em' }}>
      <Box component="div" style={{ width: '100%' }}>
        <Stepper activeStep={activeStep} style={{ width: '100%', marginBottom: '2em' }}>
          {
            stepperLabel.map((stepLabel, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: { optional?: React.ReactNode } = {};

              if (index < activeStep) {
                stepProps.completed = true;
                labelProps.optional = (
                  <div onClick={() => setActiveStep(index)}>
                    Ir Aqui
                  </div>
                )
              }

              return (
                <Step key={stepLabel} {...stepProps}>
                  <StepLabel {...labelProps} > {stepLabel} </StepLabel>
                </Step>
              )
            })
          }


        </Stepper>
        <Box>
          {/* <AppInput
            placeholder={`Flag del step ${activeStep} `}
            name="flag"
            label=""
            onChange={(event) => setInputValue(event.target.value)}
          /> */}
        </Box>
        <Box component="div" style={{ width: '100%' }}>
          {
            appSteps[activeStep]
          }
        </Box>
        <div onClick={() => updateCurrentStep()}>
          akdasda
        </div>
      </Box>
    </Container>
  )
}