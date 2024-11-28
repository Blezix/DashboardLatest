import React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../ThemeModeContext";
import { useTranslation } from "react-i18next";
export default function WorkInProgress() {
  const {t} = useTranslation();
  return <Typography variant={"h2"}>{t("WorkInProgress")}</Typography>;
}
