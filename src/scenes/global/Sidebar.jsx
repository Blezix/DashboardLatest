import React, { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
    const [activeSite, setActiveSite] = useState(null);
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const sites = [
        { name: "Home", icon: <HomeIcon /> },
        { name: "Dashboard", icon: <DashboardIcon /> },
        { name: "Profile", icon: <PersonIcon /> },
        { name: "Settings", icon: <SettingsIcon /> },
    ];

    const handleSiteClick = (site) => {
        setActiveSite(site);
    };

    return (
        <Box
            sx={{
                width: { xs: "0", sm: "18%" },
                height: "100vh",
                position: "sticky",
                top: 0,
            }}
        >
            <Box
                className="TopSidebar"
                alignItems="center"
                justifyContent="center"
                height="15%"
                color="text.secondary"
                display="flex"
                sx={{
                    flexDirection: { xs: "row", sm: "column", md: "row", lg: "column" },
                    padding: { xs: 0, sm: 0 },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "white",
                        padding: { xs: 2, sm: 2 },
                    }}
                >
                    Company
                </Typography>
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    height: "80%", width:"70%",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center", m:"auto"
                }}
            >
                <List
                    sx={{
                        width: "100%",
                        paddingTop: { xs: "0", sm: "30%", md: "15%" },
                    }}
                >
                    {sites.map((site, index) => (
                        <ListItem
                            button
                            key={index}
                            sx={{
                                color:
                                    activeSite === site.name
                                        ? theme.palette.text.secondary
                                        : theme.palette.text.notActive,
                                bgcolor:
                                    activeSite === site.name ? theme.palette.grey[900] : "transparent",
                                "&:hover": {
                                    bgcolor: theme.palette.grey[800],
                                },
                            }}
                            selected={activeSite === site.name}
                            onClick={() => handleSiteClick(site.name)}
                        >
                            <ListItemIcon
                                sx={{
                                    color:
                                        activeSite === site.name
                                            ? theme.palette.text.secondary
                                            : theme.palette.text.notActive,
                                }}
                            >
                                {site.icon}
                            </ListItemIcon>
                            {!isMediumScreen && (
                                <ListItemText
                                    primary={site.name}
                                    sx={{
                                        fontSize: {
                                            xs: "0.75rem", // Extra-small screens
                                            sm: "1rem", // Small screens
                                            md: "1.25rem", // Medium screens
                                            lg: "1.5rem", // Large screens
                                            xl: "1.75rem", // Extra-large screens
                                        },
                                        color:
                                            activeSite === site.name
                                                ? theme.palette.text.secondary
                                                : theme.palette.text.notActive,
                                    }}
                                />
                            )}
                        </ListItem>
                    ))}
                </List>
                <Box
                    sx={{
                        padding: { xs: 1, sm: 2 },
                        borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <Button
                        variant="text"
                        color="secondary"
                        sx={{
                            color: "text.notActive",
                            textTransform: "none",
                        }}
                        fullWidth
                    >
                        Logout
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;