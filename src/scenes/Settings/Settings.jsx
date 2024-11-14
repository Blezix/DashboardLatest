import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Divider } from '@mui/material';
import AppearanceSettings from './AppearanceSettings';
import LanguageSettings from './LanguageSettings';
import SaveCancelButtons from './SaveCancelButtons';

export default function Settings() {
    const [language, setLanguage] = useState("English (UK)");
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Settings</Typography>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab label="Account" />
                <Tab label="Profile" />
                <Tab label="Appearance" />
            </Tabs>
            {tabValue === 2 && (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" sx={{ m: 2 }}>Appearance</Typography>
                    <AppearanceSettings />
                    <Divider sx={{ my: 4 }} />
                    <LanguageSettings language={language} setLanguage={setLanguage} />
                    <SaveCancelButtons />
                </Box>
            )}
        </Box>
    );
}