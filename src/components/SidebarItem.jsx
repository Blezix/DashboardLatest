import React from "react";
import { ListItem, ListItemText } from "@mui/material";

const SidebarItem = ({ site, activeSite, handleSiteClick, theme }) => (
  <ListItem button onClick={() => handleSiteClick(site)}>
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
);

export default SidebarItem;
