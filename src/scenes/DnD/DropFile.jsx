import React from "react";
import { useDropzone } from "react-dropzone";
import DropZoneIcon from "@mui/icons-material/Airplay";
import {
  Box,
  useTheme,
  List,
  ListItem,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

export default function DropFile() {
  const theme = useTheme();
  const [files, setFiles] = React.useState([]);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);

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
          border: "5px dashed " + theme.palette.buttonColor.main,
          borderRadius: "5px",
          width: "50%",
          height: "80%",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          color: theme.palette.text.secondary,
          "&:hover": {
            backgroundColor: "#eef",
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
          <p>Drag 'n' drop some files here, or click to select files</p>
        </Box>
      </Box>
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          width: "30%",
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
            backgroundColor: theme.palette.buttonColor.main,
            color: theme.palette.text.primary,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          variant={"h6"}
        >
          Files
        </Typography>
        <List
          sx={{
            padding: "10px",
            height: "60%",
            overflow: "auto",
          }}
        >
          {files.map((file) => (
            <ListItem key={file.path}>
              {file.path} - {file.size} bytes
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            width: "100%",
            height: "15%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
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
              backgroundColor: theme.palette.buttonColor.main,
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.text.primary,
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          You can only upload up to 5 files.
        </Alert>
      </Snackbar>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Files uploaded successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
}
