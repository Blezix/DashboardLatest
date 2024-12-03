import React from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import DropZoneIcon from "@mui/icons-material/Airplay";
import {
  Box,
  useTheme,
  List,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DnDListItem from "./DnDListItem";

export default function DropFile() {
  const theme = useTheme();
  const [files, setFiles] = useState([]);
  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (files.length + acceptedFiles.length <= 5) {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      } else {
        setErrorOpen(true);
      }
    },
  });

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  const handleDelete = (filePath) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.path !== filePath));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        {...getRootProps({ className: "dropzone" })}
        sx={{
          border: "8px dashed " + theme.palette.DropFileAccent.main,
          borderRadius: "5px",
          width: "50%",
          height: "80%",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          margin: "auto",
          color: theme.palette.text.secondary,
          "&:hover": {
            opacity: "0.6",
          },
        }}
      >
        <input {...getInputProps()} />
        <Box
          sx={{
            opacity: "0.3",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DropZoneIcon
            sx={{
              width: "200px",
              height: "200px",
            }}
          />
          <p>{t("DropFileDropzoneTxt")}</p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "35%",
          height: "70%",
          color: theme.palette.text.primary,
          borderRadius: "8px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          sx={{
            padding: "10px",
            textJustify: "center",
            borderBottom: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          variant={"h6"}
        >
          {t("Files")}
        </Typography>
        <List
          sx={{
            padding: "10px",
            height: "70%",
            overflow: "auto",
          }}
        >
          {files.map((file) => (
            <DnDListItem
              key={file.path}
              file={file}
              onDelete={handleDelete}
              theme={theme}
            />
          ))}
        </List>
        <Box
          sx={{
            width: "100%",
            height: "10%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={() => {
              if (files.length > 0) {
                setSuccessOpen(true);
                setFiles([]);
              }
            }}
            sx={{
              backgroundColor: theme.palette.DropFileAccent.main,
              color: theme.palette.text.primary,
              maxWidth: "40%",
              "&:hover": {
                backgroundColor: theme.palette.DropFileAccent.main,
                opacity: "0.7",
              },
            }}
          >
            {t("Submit")}
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {t("UploadLimitError")}
        </Alert>
      </Snackbar>
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("UploadSuccess")}
        </Alert>
      </Snackbar>
    </Box>
  );
}
