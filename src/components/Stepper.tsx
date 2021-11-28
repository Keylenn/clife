import { default as MuiStepper } from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

export default function Stepper({ steps, ...resetStepperProps }: any) {
  return (
    <MuiStepper orientation="vertical" {...resetStepperProps}>
      {steps.map(({ key, label, labelOption, content }: any) => {
        return (
          <Step key={key ?? label}>
            <StepLabel {...labelOption}>{label}</StepLabel>
            <StepContent>{content}</StepContent>
          </Step>
        );
      })}
    </MuiStepper>
  );
}
