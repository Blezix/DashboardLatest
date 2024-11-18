import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export default function CardInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-around",
          marginBottom: "40px",
          width: "80%",
          height: "120px",
          borderRadius: "20px",
          background: "linear-gradient(to right bottom,#666 ,#484848,#4d4d4d)",
          padding: 3,
          border: "4px solid #3e3d3d",
          color: "white",
        }}
      >
        <Typography variant="h6">Card</Typography>
        <Typography variant="h4">$34,000.00</Typography>
        <Typography>Michael Smith</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      ></Box>
    </Box>
  );
}
