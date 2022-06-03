import { useCookieState } from "ahooks";

export default function useStep({ defaultActiveStep = 0 } = {}) {
  const [activeStep, setActiveStep] = useCookieState("_activeStep", {
    defaultValue: defaultActiveStep as any,
    expires: getDayExpires()
  });

  const onNext = () => {
    setActiveStep((prevActiveStep: any) => {
      const res = (+prevActiveStep + 1) as any
      return res
    });
  };

  const onBack = () => {
    setActiveStep((prevActiveStep: any) => {
      const res = (+prevActiveStep - 1) as any
      return res
    });
  };

  const goto = (step: any) => {
    setActiveStep(step);
  };

  return { activeStep: +(activeStep as any), onNext, onBack, goto };
}

function getDayExpires() {
  const currDate = new Date();
  const currStamp = currDate.getTime();
  const earlyMorningStamp =
    new Date(currDate.toLocaleDateString()).getTime() - 1;
  const passedStamp = currStamp - earlyMorningStamp;
  const remainStamp = 24 * 3600 * 1000 - passedStamp;
  const timeLeftDate = new Date();
  timeLeftDate.setTime(remainStamp + currStamp);

  return timeLeftDate;
}
