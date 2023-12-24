import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Dashboard from "../icons/dashboard.svg";
import Assessment from "../icons/note_alt.svg";
import Question from "../icons/quiz.svg";
import RoundStatus from "../icons/admin_meds.svg";
import Line from "../icons/Vector 267.svg";

const SidebarItem = ({ icon, text }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="85px"
    border="2px solid transparent"
    borderRadius="8px"
    padding="10px 4px"
    gap="10px"
    sx={{
      "&:hover": {
        border: "2px solid #1C4980",
        borderRadius: "8px",
        background: "#E5F1FC",
        cursor: "pointer",
      },
    }}>
    <img style={{ width: "20px", height: "20px" }} src={icon} alt={text} />
    <Typography
      sx={{
        fontSize: "0.8rem",
        color: "#1C4980",
        fontWeight: "560",
        textAlign: "center",
      }}>
      {text === "Round Status"
        ? text.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              {word}
              <br />
            </React.Fragment>
          ))
        : text}
    </Typography>
  </Box>
);

const Sidebar = () => (
  <Box
    sx={{ paddingTop: "40px",background:"white", }}
    width="10%"
    height="100vh"
    display="flex"
    padding="20px 2px 0px 2px "
    flexDirection="column"
    alignItems="center"
    gap="10px">
    {[
      { icon: Dashboard, text: "Dashboard" },
      { icon: Assessment, text: "Assessment" },
      { icon: Question, text: "My Library" },
    ].map((item, index) => (
      <SidebarItem key={index} {...item} />
    ))}

    <img
      width="120px"
      style={{ padding: "40px 0px 10px 0px" }}
      src={Line}
      alt="Dotted Line"
    />

    <Box
      width="100%"
      height="65px"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Button
        sx={{
          width: "65px",
          height: "25px",
          border: "2px solid #D63500",
          borderRadius: "20px",
          color: "#D63500",
          fontSize: "0.7rem",
          fontWeight: "550",
          wordWrap: "break-word",
          textTransform: "none",
          background: "#FBEBEA",
        }}>
        Admin
      </Button>
    </Box>

    <SidebarItem icon={RoundStatus} text="Round Status" />
  </Box>
);

export default Sidebar;
