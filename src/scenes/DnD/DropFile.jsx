import React from "react";
import {useDropzone} from "react-dropzone";
import DropZoneIcon from "@mui/icons-material/Airplay";
import {Box, useTheme, List, ListItem, Button, Divider, Icon} from "@mui/material";
export default function DropFile(){
    const theme = useTheme();

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    let [file, setFile] = React.useState(null);
    const files = [];
    React.useEffect(() => {
        if (acceptedFiles.length) {
            file = acceptedFiles[acceptedFiles.length];
            setFile(file);
            files[files.length] = file;
            console.log(file + files.length)
        }
    }, [acceptedFiles]);
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
        }}>
            <Box {...getRootProps({className: "dropzone"})}
                sx={{
                    border: "5px dashed #4d5770",
                    borderRadius: "5px",
                    width:"50%",
                    height:"80%",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "20px",
                    marginLeft:"auto",
                    marginRight:"auto",
                    color: theme.palette.text.secondary,
                    "&:hover": {
                        backgroundColor: theme.palette.blueAccent.main,
                    },
                }}
            >
                <input {...getInputProps()} />
                <Box sx={{
                    opacity: "0.3",
                    width:"100%",
                    height:"100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <DropZoneIcon sx={{
                    width: "200px",
                    height: "200px"
                }}

                />
                    <p>Drag 'n' drop some files here, or click to select files</p>

                </Box>

            </Box>
            <Box sx={{
                border: `1px solid ${theme.palette.divider}`,
                width: "30%",
                height: "50%",
                overflow: "auto",
                color: theme.palette.text.primary,
                borderRadius: "8px",
                marginLeft:"auto",
                marginRight:"auto"
            }}>
                <List sx={{
                    padding: "10px",
                    height:"70%"

                }}>
                    <h4>Files</h4>

                    {acceptedFiles.map((file) => (
                        <ListItem key={file.path}>
                            {file.path} - {file.size} bytes
                        </ListItem>
                    ))}
                </List>

                <Box sx={{
                    width: "100%",
                    height:"15%",
                    margin: "auto",
                    display:"flex",
                    justifyContent: "center",
                }}>
                    <Button
                        sx={{

                            backgroundColor: "#4c5870",
                            color: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: theme.palette.text.primary,
                            }
                        }}
                    >Submit</Button>
                </Box>

            </Box>
        </Box>
    );
}