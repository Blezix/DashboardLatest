import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ site, path, activeSite, handleSiteClick, theme }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        handleSiteClick(site);
        navigate(path);
    };

    return (
        <ListItem button onClick={handleClick}>
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
};

export default SidebarItem;