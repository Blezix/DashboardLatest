import React from "react";
import { Box, Button } from "@mui/material";

const SidebarFooter = ({ theme }) => (
  <Box
    sx={{
      padding: { xs: 1, sm: 2 },
      borderTop: `1px solid ${theme.palette.divider}`,
    }}
  >
    <Button
      variant="text"
      color="secondary"
      sx={{
        color: theme.palette.text.notActive,
        textTransform: "none",
      }}
      fullWidth
    >
      Logout
    </Button>
  </Box>
);

export default SidebarFooter;
