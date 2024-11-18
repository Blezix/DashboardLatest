import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Skeleton,
} from "@mui/material";
import { useThemeMode } from "../../ThemeModeContext";

export default function AppearanceSettings() {
    const { mode, toggleTheme } = useThemeMode();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={{ mb: 4 }}>
            <Typography sx={{ color: "text.secondary" }}>Theme Color</Typography>
            {loading ? (
                <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                    <Skeleton variant="rectangular" width={200} height={100} />
                    <Skeleton variant="rectangular" width={200} height={100} />
                </Box>
            ) : (
                <ToggleButtonGroup exclusive sx={{ mt: 1 }}>
                    <ToggleButton
                        sx={{
                            width: "200px",
                            height: "100px",
                            backgroundColor: mode === "light" ? "#f0f0f0" : "#333",
                            color: mode === "light" ? "#000" : "#fff",
                            "&:hover": {
                                backgroundColor: mode === "light" ? "#e0e0e0" : "#444",
                            },
                        }}
                        value="light"
                        onClick={() => toggleTheme("light")}
                    >
                        Light Mode
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            width: "200px",
                            height: "100px",
                            backgroundColor: mode === "dark" ? "#333" : "#f0f0f0",
                            color: mode === "dark" ? "#fff" : "#000",
                            "&:hover": {
                                backgroundColor: mode === "dark" ? "#444" : "#e0e0e0",
                            },
                        }}
                        value="dark"
                        onClick={() => toggleTheme("dark")}
                    >
                        Dark Mode
                    </ToggleButton>
                </ToggleButtonGroup>
            )}
        </Box>
    );
}