import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery, Slide } from '@mui/material';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
    const [activeSite, setActiveSite] = useState(null);
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
            <Box sx={{ width: { xs: '0', sm: '18%' }, height: '100vh', position: 'sticky', top: 0 }}>
                <SidebarHeader />
                <Box sx={{ bgcolor: 'paperBackground.main', height: '80%', width: '70%', borderRadius: '20px', pl: 1, pr: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', m: 'auto' }}>
                    <SidebarMenu activeSite={activeSite} setActiveSite={setActiveSite} />
                    <SidebarFooter />
                </Box>
            </Box>
        </Slide>
    );
};

export default Sidebar;