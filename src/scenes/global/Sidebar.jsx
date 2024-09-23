import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Sidebar = () => {
  const [activeSite, setActiveSite] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const sites = ["Home", "Dashboard", "Profile", "Settings"];

  const handleSiteClick = (site) => {
    setActiveSite(site);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "20%" },
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
          bgcolor: "primary.main",
          height: "85%",
          borderRadius: { xs: "0", sm: "0 70px 0px 0" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <List
          sx={{
            width: "60%",
            paddingTop: { xs: "0", sm: "30%", md: "15%" },
          }}
        >
          {sites.map((site, index) => (
            <ListItem
              button
              key={index}
              sx={{
                color:
                  activeSite === site
                    ? theme.palette.text.secondary
                    : theme.palette.text.notActive,
                bgcolor:
                  activeSite === site ? theme.palette.grey[900] : "transparent",
                "&:hover": {
                  bgcolor: theme.palette.grey[800],
                },
              }}
              selected={activeSite === site}
              onClick={() => handleSiteClick(site)}
            >
              <ListItemText
                primary={site}
                sx={{
                  fontSize: {
                    xs: "0.75rem", // Extra-small screens
                    sm: "1rem", // Small screens
                    md: "1.25rem", // Medium screens
                    lg: "1.5rem", // Large screens
                    xl: "1.75rem", // Extra-large screens
                  },
                  color:
                    activeSite === site
                      ? theme.palette.text.secondary
                      : theme.palette.text.notActive,
                }}
              />
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
