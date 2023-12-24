import { Box, Typography } from "@mui/material";
import React from "react";
import VerticalLine from "../icons/Vector 298.svg";
import Agenda from "../icons/view_agenda.svg";
import Globe from "../icons/globe.svg";
import User from "../icons/user.svg";
import Link from "../icons/attach.svg";
import Plus from "../icons/add.svg";
import Bag from "../icons/bag.svg";
import More from "../icons/dots.svg";
import Calendar from "../icons/calendar_today.svg";
import { Grid, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Sidebar from "./SideBar";

function Home() {
  const StyledGridItem = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    // textAlign: "center",
  }));
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ background: "#DADCE0" }}
      display="flex"
      justifyContent="flex-end">
      <Sidebar />

      <Box
        borderRadius="15px"
        width="85%"
        height="auto"
        sx={{ background: "white" }}>
        <Box display="flex" alignItems="center" padding="10px">
          <Typography
            color="#1C4980"
            fontWeight="600"
            fontSize="1.3rem"
            padding="15px 20px 0 10px">
            Assessment
          </Typography>
          <img src={VerticalLine} alt="Vertical" />
          <Typography padding="15px 20px 0 20px" color="#0073E6">
            My Assessments
          </Typography>
        </Box>
        <hr style={{ border: "0.25px solid #ebe8e8", margin: "10px 0" }} />
        <Typography
          color="#1C4980"
          padding="5px 5px 30px 20px"
          fontSize="1.3rem">
          Assessment Overview
        </Typography>

        <Grid container spacing={2}>
          <StyledGridItem
            item
            xs={6}
            sm={6}
            md={1.5}
            lg={1.5}
            order={{ xs: 1, sm: 1, md: 1 }}>
            <Box
              display="flex"
              flexDirection="column"
              color="#1C4980"
              alignItems="center">
              <Typography fontSize="1rem" marginLeft="15px">
                Total Assessment
              </Typography>
              <Box display="flex" padding="10px 0px 0px 25px">
                <img src={Agenda} alt="Total Assessment" />
                <Typography
                  fontWeight="900"
                  fontSize="1.5rem"
                  paddingLeft="10px">
                  34
                </Typography>
              </Box>
            </Box>
          </StyledGridItem>

          <StyledGridItem
            item
            xs={12}
            sm={12}
            md={4.5}
            lg={4.5}
            order={{ xs: 3, sm: 3, md: 2 }}>
            <Box display="flex" flexDirection="column" color="#1C4980">
              <Typography fontSize="1rem">Candidates</Typography>
              <Box display="flex" justifyContent="space-evenly">
                <img src={User} alt="Total Assessment" />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    {" "}
                    <Typography fontWeight="900" fontSize="1.5rem">
                      11145
                    </Typography>
                    <Typography color="#05C165" marginLeft="5px">
                      +89
                    </Typography>
                  </Box>
                  <Typography>Total Candidate</Typography>
                </Box>
                <img src={VerticalLine} alt="Vertical" />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    {" "}
                    <Typography fontWeight="900" fontSize="1.5rem">
                      114
                    </Typography>
                    <Typography color="#05C165" marginLeft="5px">
                      +89
                    </Typography>
                  </Box>
                  <Typography>Who Attempted</Typography>
                </Box>{" "}
              </Box>
            </Box>
          </StyledGridItem>
          <StyledGridItem
            item
            xs={12}
            sm={12}
            md={4.5}
            lg={4.5}
            order={{ xs: 4, sm: 4, md: 3 }}>
            <Box display="flex" flexDirection="column" color="#1C4980">
              <Typography fontSize="1rem">Candidates Source</Typography>
              <Box display="flex" justifyContent="space-evenly">
                <img src={Globe} alt="Total Assessment" />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    {" "}
                    <Typography fontWeight="900" fontSize="1.5rem">
                      11145
                    </Typography>
                    <Typography color="#05C165" marginLeft="5px">
                      +89
                    </Typography>
                  </Box>
                  <Typography>E-mail</Typography>
                </Box>
                <img src={VerticalLine} alt="Vertical" />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    {" "}
                    <Typography fontWeight="900" fontSize="1.5rem">
                      114
                    </Typography>
                    <Typography color="#05C165" marginLeft="5px">
                      +89
                    </Typography>
                  </Box>
                  <Typography>Social Share</Typography>
                </Box>{" "}
                <img src={VerticalLine} alt="Vertical" />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    {" "}
                    <Typography fontWeight="900" fontSize="1.5rem">
                      145
                    </Typography>
                    <Typography color="#05C165" marginLeft="5px">
                      +89
                    </Typography>
                  </Box>
                  <Typography>Unique Link</Typography>
                </Box>{" "}
              </Box>
            </Box>
          </StyledGridItem>
          <StyledGridItem
            item
            xs={6}
            sm={6}
            md={1.5}
            lg={1.5}
            order={{ xs: 2, sm: 2, md: 4 }}>
            <Box
              display="flex"
              color="#1C4980"
              flexDirection="column"
              alignItems="center">
              <Typography fontSize="1rem">Total Purpose</Typography>
              <Box display="flex" alignItems="center" paddingTop="10px">
                <img src={Link} alt="Total Assessment" />
                <Typography
                  fontWeight="900"
                  fontSize="1.5rem"
                  marginLeft="10px">
                  34
                </Typography>
              </Box>
            </Box>
          </StyledGridItem>
        </Grid>
        <Typography padding="25px" color="#1C4980" fontSize="1.3rem">
          My Assessment
        </Typography>
        {/* //have to change flex dir to column when screen size  reduces */}
        <Box
          display="flex"
          justifyContent="space-evenly"
          // gap="20px"
          color="#1C4980">
          <Box
            display="flex"
            flexDirection="column"
            border="1px dashed black"
            borderRadius="15px"
            height="230px"
            width="28%"
            alignItems="center"
            justifyContent="center">
            <img
              style={{
                border: "0px solid trasparent ",
                borderRadius: "50px",
                backgroundColor: "white",
                width: "60px",
                height: "60px",
              }}
              src={Plus}
              alt="Add"
            />
            <Typography fontSize="1.25rem" padding="10px">
              New Assessment
            </Typography>
            <Typography textAlign="center" fontSize="0.9rem">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </Typography>
          </Box>
          <Box
            boxSizing="border-box"
            padding="15px"
            borderRadius="15px"
            height="230px"
            width="28%"
            border="0.5px solid lightgrey"
            display="flex"
            flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              {" "}
              <img src={Bag} alt="Bag" />
              <img
                style={{ height: "20px", paddingRight: "10px" }}
                src={More}
                alt="# dots"
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography fontSize="1.25rem" padding="10px 0px 10px 0px">
                Math Assessment
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography fontSize="0.8rem">Job</Typography>
                <img
                  style={{ height: "25px", padding: "0px 10px 0px 10px" }}
                  src={VerticalLine}
                  alt="Vertical Line"
                />
                <img src={Calendar} alt="calendar" />
                <Typography ml="5px" fontSize="0.65rem">
                  20 Apr 2023
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Box display="flex" flexDirection="column">
                  <Typography fontSize="0.8rem">00</Typography>
                  <Typography fontSize="0.8rem">Duration</Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography fontSize="0.8rem">00</Typography>
                  <Typography fontSize="0.8rem">Questions</Typography>
                </Box>
              </Box>
              <Box display="flex" width="75%" justifyContent="center">
                <Box
                  display="flex"
                  border="2px solid black"
                  borderRadius="35px"
                  width="55%"
                  alignItems="center"
                  justifyContent="space-evenly">
                  <img src={Link} width="24" alt="pin" />
                  <Typography fontSize="0.8rem">Share</Typography>
                </Box>
                <Box>
                  <AvatarGroup max={4}>
                    <Avatar
                      sx={{ width: 24, height: 24 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      sx={{ width: 24, height: 24 }}
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      sx={{ width: 24, height: 24 }}
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </AvatarGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
