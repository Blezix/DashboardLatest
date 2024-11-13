import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Button } from '@mui/material';
import { useThemeMode } from '../../ThemeModeContext';
import Profile from "./Tabs/Profile/Profile";
import Prefrence from "./Tabs/Prefrence/Prefrence";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
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
        <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
            <Tabs sx={{ height: '100%', width: '20%' }} orientation="vertical" value={value} onChange={handleChange}>
                <Tab label="Profile" />
                <Tab label="Prefrences" />
                <Tab label="Security" />
            </Tabs>
            <TabPanel  value={value} index={0} >
                <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Prefrence />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Security Content
            </TabPanel>

        </Box>
    );
}