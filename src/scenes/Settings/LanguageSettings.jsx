import React from "react";
import { Box, Typography, TextField,useTheme } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function LanguageSettings({ language, setLanguage }) {
    const theme = useTheme();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ color: "text.secondary" }}>Language</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <LanguageIcon sx={{ mr: 1, color:"text.secondary", fontSize:"2rem" }} />
        <TextField
          select
          SelectProps={{ native: true }}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          onChange={(e)=>{console.log("Language change ", e.target.value)}}
          sx={{ width: 200 }}
        >
          <option value="English (UK)">English (UK)</option>
          <option value="English (US)">English (US)</option>
          <option value="Spanish">Spanish</option>
        </TextField>
      </Box>
    </Box>
  );
}
