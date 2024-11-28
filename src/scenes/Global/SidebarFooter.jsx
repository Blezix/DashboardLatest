import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function SidebarFooter() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Button
        variant="text"
        color="secondary"
        sx={{ color: "text.notActive", textTransform: "none" }}
        fullWidth
      >
          {t("Logout")}
      </Button>
    </Box>
  );
}
