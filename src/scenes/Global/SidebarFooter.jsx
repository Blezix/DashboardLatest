import React from "react";
import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
export default function SidebarFooter() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        borderTop: `1px solid ${theme.palette.divider}`,
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Button
        variant="text"
        color="secondary"
        sx={{
          color: "text.notActive",
          textTransform: "none",
          width: "100%",
          display: "flex",
          padding: "16px 20px",
          gap: "26px",
          justifyContent: "start",
        }}
        fullWidth
      >
        <LogoutIcon />
        <Typography>{t("Logout")}</Typography>
      </Button>
    </Box>
  );
}
