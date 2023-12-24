import React from "react";
import { Box, Typography } from "@mui/material";
import Cross from "../icons/cut.svg";
import Dashboard from "../icons/dashboard.svg";
import Assessment from "../icons/note_alt.svg";
import Question from "../icons/quiz.svg";
import RoundStatus from "../icons/admin_meds.svg";
import Line from "../icons/Vector 267.svg";

function MenuItem({ icon, label }) {
  return (
    <Box display="flex">
      <img style={{ paddingRight: "10px" }} src={icon} alt={label} />
      <Typography>{label}</Typography>
    </Box>
  );
}

function ToggleSideBar() {
  return (
    <Box display="flex" flexDirection="column" width="10%" padding="15px" height="100vh" gap="20px">
      <Box display="flex" justifyContent="space-between">
        <Typography>Menu</Typography>
        <img style={{ paddingRight: "10px" }} src={Cross} alt="Cross" />
      </Box>
      <Box display="flex" flexDirection="column" gap="20px">
        <MenuItem icon={Dashboard} label="Dashboard" />
        <MenuItem icon={Assessment} label="Assessment" />
        <MenuItem icon={Question} label="My Library" />
        <img width="100px" height="2px" src={Line} alt="Line" />
        <MenuItem icon={RoundStatus} label="Round Status" />
      </Box>
    </Box>
  );
}

export default ToggleSideBar;
