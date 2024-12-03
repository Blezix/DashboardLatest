import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { Box, Typography, useTheme } from "@mui/material";
import { ThemeContext } from "../../ThemeModeContext";
import { useTranslation } from "react-i18next";
import SafeHtmlDisplay from "../../components/SafeHtmlDisplay";

export default function TextEditor() {
  const [content, setContent] = useState("");
  const theme = useTheme();
  const { themeMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const handleContentChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const headerTemplate = `
        <div style="text-align: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 20px;">
            Raport
        </div>
    `;

  const footerTemplate = `
        <div style="text-align: center; font-size: 1rem; color: grey; margin-top: 20px;">
            © 2024 Footer
        </div>
    `;

  const combinedContent = `
        <Box sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "space-between",
           
        }}>
        ${headerTemplate}
        <div>${content}</div>
        ${footerTemplate}
        </Box>
    `;

  return (
    <Box sx={{ padding: 3, width: "100%", overflow: "auto" }}>
      <Typography
        variant="h5"
        sx={{ mb: 3, color: theme.palette.text.primary }}
      >
        {t("ReportGenerator")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Text Editor */}
        <Box
          sx={{
            flex: 1,
            pb: { xs: 16, sm: 6 },
            color: themeMode === "light" ? "#222" : "#fff",
            ".ql-toolbar .ql-stroke": {
              fill: "none",
              stroke: themeMode === "light" ? "#272727" : "#fff",
            },
            ".ql-toolbar .ql-fill": {
              fill: themeMode === "light" ? "#272727" : "#fff",
            },
            ".ql-picker-label": {
              color: themeMode === "light" ? "#222" : "#fff",
            },
            ".ql-picker-options": {
              color: themeMode === "light" ? "#222" : "#fff",
              backgroundColor: themeMode === "light" ? "#fff" : "#3a3a3a",
            },
          }}
        >
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
            theme="snow"
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            border: `1px solid ${theme.palette.divider}`,
            padding: 2,
            minHeight: "200px",
            maxWidth: "50%",
            overflow: "auto",
            backgroundColor: "#fbfafa",
            "& .ql-align-center": { textAlign: "center" },
            "& .ql-align-right": { textAlign: "right" },
            "& .ql-align-justify": { textAlign: "justify" },
          }}
        >
          <SafeHtmlDisplay html={combinedContent} />
        </Box>
      </Box>
    </Box>
  );
}
