import React from 'react';
import { Box, Button } from '@mui/material';

export default function SaveCancelButtons() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Button variant="outlined" sx={{ mr: 2 }}>Cancel</Button>
            <Button variant="contained">Save changes</Button>
        </Box>
    );
}