import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';

export default function Profile() {
    return (
        <Box sx={{
            width: "80%",
            height: "100%",
            display: "flex",
        }}>
            <Paper sx={{
                height:"100%",
                backgroundColor: "#4f3eb4ad", //color
                p: 2,
                display: "flex",
                color:"white",
                flexDirection: "column",
                borderRadius:"18px"
            }}>
                <Typography variant={"h3"}>Profile</Typography>
                <Box sx={{ mt: 2, width:"50%", ml:"auto", mr:"auto" }}>
                    <Avatar
                        alt="John Doe"
                        src="/path/to/avatar.jpg"
                        sx={{ width: 150, height: 150, ml:"auto", mr:"auto" }}
                    />
                </Box>
                <Typography variant={"h6"}> John Doe</Typography>
                <Typography variant={"h6"}></Typography>
                <Typography variant={"h6"}>Email: john.doe@example.com</Typography>
            </Paper>
        </Box>
    );
}