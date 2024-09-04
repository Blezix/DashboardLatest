import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box padding={2} bgcolor={"grey.light"}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingTop: 1, bgcolor: 'grey.light' }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="dashboard tabs">
        <Tab label="Universal card" sx={{ color: 'grey.main', textTransform: 'none' }} />
          <Tab label="Silver" sx={{ color: 'grey.main', textTransform: 'none' }} />
          <Tab label="Platinum" sx={{ color: 'grey.main', textTransform: 'none' }} />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2, bgcolor: 'grey.light' }}>
        {activeTab === 0 && <Box>
            <Box>
                <Box sx={{width:"340px", height:"200px",borderRadius:"20px",bgcolor:"primary.main"}}></Box>
            </Box>
            <Box></Box>
            </Box>}
        {activeTab === 1 && <Typography>Content for Tab Two</Typography>}
        {activeTab === 2 && <Typography>Content for Tab Three</Typography>}
      </Box>
    </Box>
  );
};

export default DashboardTabs;