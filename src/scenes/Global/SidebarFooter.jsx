import React from 'react';
import { Box, Button, useTheme } from '@mui/material';

export default function SidebarFooter() {
    const theme = useTheme();

    return (
        <Box sx={{ padding: { xs: 1, sm: 2 }, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Button variant="text" color="secondary" sx={{ color: 'text.notActive', textTransform: 'none' }} fullWidth>
                Logout
            </Button>
        </Box>
    );
}