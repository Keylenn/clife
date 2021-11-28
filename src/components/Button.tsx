import { default as MuiButton, ButtonProps } from "@mui/material/Button";

export type MuiButtonProps = ButtonProps

export default function Button(props: MuiButtonProps) {
  return <MuiButton variant="outlined" size="small" {...props} />;
}
