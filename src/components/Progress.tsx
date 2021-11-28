import React from "react";
import { Liquid } from "@ant-design/charts";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

const openModalBtnStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "60px",
  right: "30px"
};

const liquidBoxStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 200,
  color: "#fff",
  borderRadius: "50%",
  borderWidth: 0
};


interface Props {
  percent: number
}

export default function ProgressModal({ percent }: Props) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const config = {
    percent: percent,
    color: getLiquidFillColor(percent),
    outline: {
      border: 4,
      distance: 2
    },
    wave: {
      length: 128
    }
  };
  return (
    <section>
      <IconButton
        style={openModalBtnStyle}
        color="primary"
        aria-label="add an alarm"
        onClick={handleOpen}
      >
        <AlarmIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={liquidBoxStyle}>
          <Liquid
            style={{ border: "none", width: "100%", height: "100%" }}
            {...config}
          />
        </Box>
      </Modal>
    </section>
  );
}

function getLiquidFillColor(percent: number) {
  if (percent >= 0.5) {
    return "#00FF7F";
  } else if (percent >= 0.25) {
    return "#6193f9";
  } else {
    return "#FF8C00";
  }
}
