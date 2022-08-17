import { Container, Step, StepLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import React, { PropsWithChildren } from "react";
import { stepperLabel } from "../interfaces/AppStep";
import CookieStep from "./CookieStep/CookieStep";
import FlagInput from "./FlagInput/FlagInput";
import AppInput from "./general/AppInput";
import SQLInjectionStep from "./SQLInjectionStep/SQLInjectionStep";
import SteganographyStep from "./SteganographyStep/components/SteganographyStep";
import XSSStep from "./XSSStep/components/XSSStep";
import Divider from '@mui/material/Divider';


interface Props {

}

export default function GeneralStepper(props: PropsWithChildren<Props>) {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [maxStepSolved, setMaxStepSolved] = React.useState<number>(0);

  const updateCurrentStep = () => {
    let newValue = activeStep + 1;
    if (newValue > maxStepSolved) {
      setMaxStepSolved(Math.min(newValue, stepperLabel.length - 1));
    }
    if (newValue > stepperLabel.length - 1) {
      alert("Gracias por jugar ! ")
      window.location.replace("https://youtu.be/dQw4w9WgXcQ");
    }
    setActiveStep(Math.min(newValue, stepperLabel.length - 1))
  }

  const appSteps: Array<JSX.Element> = [
    <SQLInjectionStep
    />,
    <CookieStep />
    ,
    <XSSStep
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

              if (index < activeStep || index < maxStepSolved) {
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
          <FlagInput
            activeStep={activeStep}
            onSuccess={() => updateCurrentStep()}
          />
          <Divider />
        </Box>

        <Box component="div" style={{ width: '100%' }}>
          <Box style={{ fontWeight: '600', textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
            PLAYGROUND
          </Box>
          {
            appSteps[activeStep]
          }
        </Box>

      </Box>
    </Container>
  )
}