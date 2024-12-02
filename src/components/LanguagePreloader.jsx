import React from "react";
import { Box, Skeleton } from "@mui/material";

const LanguagePreloader = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Skeleton variant="text" width={100} height={40} />
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={200} height={56} sx={{ ml: 2 }} />
            </Box>
        </Box>
    );
};

export default LanguagePreloader;