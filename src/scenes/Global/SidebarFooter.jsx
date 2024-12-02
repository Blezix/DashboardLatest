import React from "react";
import {Box, Button, Typography, useTheme} from "@mui/material";
import { useTranslation } from "react-i18next";
import LogoutIcon from '@mui/icons-material/LogoutOutlined';export default function SidebarFooter() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
          padding:{xs:1,sm:2},
        borderTop: `1px solid ${theme.palette.divider}`,
          display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"80%"
      }}
    >
      <Button
        variant="text"
        color="secondary"
        sx={{ color: "text.notActive", textTransform: "none",width:"100%",justifyContent:"space-between",display:"flex",padding: "16px 35px",
        }}

      >
          <LogoutIcon />
          <Typography >{t("Logout")}</Typography>
      </Button>
    </Box>
  );
}
