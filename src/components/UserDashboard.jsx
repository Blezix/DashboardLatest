import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import UpArrow from "@mui/icons-material/CallMade";
import DownArrow from "@mui/icons-material/CallReceived";
const UserDashboard = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
    >
      <Box
        height={"40%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Avatar
          variant="circular"
          src=""
          alt=""
          sx={{ width: "45px", height: "45px" }}
        />
        <Typography variant="caption" color="initial">
          Welcome back,
        </Typography>
        <Typography variant="h6">John Doe</Typography>
      </Box>
      <Box
        height={"50%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Box
          width={"90%"}
          height={"45%"}
          sx={{ border: "1px solid lightgrey" }}
          borderRadius={"10px"}
          p={1}
          display={"flex"}
          alignItems={"center"}
        >
          <Avatar
            variant="circular"
            src=""
            alt=""
            sx={{
              width: "45px",
              height: "45px",
              margin: "0 5% 0 5%",
              bgcolor: "greenAccent.main",
            }}
          >
            <UpArrow
              sx={{
                color: "black",
              }}
            />
          </Avatar>
          <Box display={"flex"} width="30%" flexDirection={"column"} pl={2}>
            <Typography variant="h7" color="grey.main">
              Income
            </Typography>
            <Typography variant="h6">$1000</Typography>
          </Box>
        </Box>
        <Box
          width={"90%"}
          height={"45%"}
          sx={{ border: "1px solid lightgrey" }}
          borderRadius={"10px"}
          p={1}
          display={"flex"}
          alignItems={"center"}
        >
          <Avatar
            variant="circular"
            src=""
            alt=""
            p={1}
            sx={{
              width: "45px",
              height: "45px",
              margin: "0 5% 0 5%",
              bgcolor: "redAccent.main",
            }}
          >
            <DownArrow
              sx={{
                color: "black",
              }}
            />
          </Avatar>
          <Box display={"flex"} width="30%" flexDirection={"column"} pl={2}>
            <Typography variant="h7" color="grey.main">
              Expenses
            </Typography>
            <Typography variant="h6">$4000</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
