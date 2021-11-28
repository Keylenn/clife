import Button from "./Button";

export default function StepOption({
  nextText = "Next",
  backText = "Back",
  disabledBack = false,
  onNext,
  onBack
}: any) {
  return (
    <div>
      <Button variant="contained" onClick={onNext} sx={{ mt: 1, mr: 1 }}>
        {nextText}
      </Button>
      <Button disabled={disabledBack} onClick={onBack} sx={{ mt: 1, mr: 1 }}>
        {backText}
      </Button>
    </div>
  );
}
