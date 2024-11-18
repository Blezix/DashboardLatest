import React from "react";
import { Box, Typography } from "@mui/material";

export default function SidebarHeader() {
  return (
    <Box
      className="TopSidebar"
      alignItems="center"
      justifyContent="center"
      height="15%"
      color="text.secondary"
      display="flex"
      sx={{
        flexDirection: { xs: "row", sm: "column", md: "row", lg: "column" },
        padding: { xs: 0, sm: 0 },
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "white", padding: { xs: 2, sm: 2 } }}
      >
        Company
      </Typography>
    </Box>
  );
}
