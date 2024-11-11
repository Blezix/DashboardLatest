import React, { useState } from 'react';
import { Paper, Typography, Box, Avatar, Tabs, Tab } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            sx={{ width: "80%", height: "100%", p: 2 }}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default function Settings() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
        }}>
            <Tabs
                sx={{ height: "100%", width: "20%" }}
                orientation="vertical"
                value={value}
                onChange={handleChange}
            >
                <Tab label="Profile" />
                <Tab label="Account" />
                <Tab label="Security" />
            </Tabs>
            <TabPanel value={value} index={0}>
                Profile Content
            </TabPanel>
            <TabPanel value={value} index={1}>
                Account Content
            </TabPanel>
            <TabPanel value={value} index={2}>
                Security Content
            </TabPanel>
        </Box>
    );
}