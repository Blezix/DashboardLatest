import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';

const sites = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { name: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { name: 'DnD', icon: <LibraryAddIcon />, path: '/dragndrop' },
    { name: 'Text Editor', icon: <ArticleIcon />, path: '/codeeditor' },
];

export default function SidebarMenu({ activeSite, setActiveSite }) {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const handleSiteClick = (site) => {
        setActiveSite(site.name);
        navigate(site.path);
    };

    return (
        <List sx={{ width: '100%', paddingTop: { xs: '0', sm: '30%', md: '15%' } }}>
            {sites.map((site, index) => (
                <ListItem button key={index} sx={{ color: activeSite === site.name ? theme.palette.text.secondary : theme.palette.text.notActive, bgcolor: activeSite === site.name ? theme.palette.grey[900] : 'transparent', '&:hover': { bgcolor: theme.palette.grey[800] } }} selected={activeSite === site.name} onClick={() => handleSiteClick(site)}>
                    <ListItemIcon sx={{ color: activeSite === site.name ? theme.palette.text.secondary : theme.palette.text.notActive }}>
                        {site.icon}
                    </ListItemIcon>
                    {!isMediumScreen && (
                        <ListItemText primary={site.name} sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }, color: activeSite === site.name ? theme.palette.text.secondary : theme.palette.text.notActive }} />
                    )}
                </ListItem>
            ))}
        </List>
    );
}