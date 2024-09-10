import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import CustomIcon from "./CustomIcon";
import SimCardIcon from '@mui/icons-material/SimCard';
const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "90%", minWidth:"500px", pl: "5%" }}>
      <Box padding={2} bgcolor={"grey.light"}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            paddingTop: 1,
            bgcolor: "grey.light",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="dashboard tabs"
          >
            <Tab
              label="Universal card"
              sx={{ color: "grey.main", textTransform: "none" }}
            />
            <Tab
              label="Silver"
              sx={{ color: "grey.main", textTransform: "none" }}
            />
            <Tab
              label="Platinum"
              sx={{ color: "grey.main", textTransform: "none" }}
            />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2, bgcolor: "grey.light" }}>
          {activeTab === 0 && (
            <Box>
              <Box>
                <Box
                  sx={{
                    width: {
                      xs: "200px", // small screens
                      sm: "200px", // medium screens
                      md: "250px", // large screens
                      lg: "300px", // extra large screens
                      xl: "350px"
                    },
                    height: {
                      xs: "120px", // small screens
                      sm: "150px", // medium screens
                      md: "150px", // large screens
                      lg: "170px", // extra large screens
                      xl: "180px", // extra large screens
                    },
                    borderRadius: "20px",
                    bgcolor: "primary.main",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                 
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "start",
                      p: 3,
                      width: "100%",
                      height: "50%",
                    }}
                  >
                    <Typography
                      color={"#d2dde3"}
                      letterSpacing={1}
                      variant="h7"
                    >
                      1234 1234 1234 1234
                    </Typography>
                    <Typography color={"#d2dde3"} variant="h7">
                      John Doe
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          )}
          {activeTab === 1 && <Typography>Content for Tab Two</Typography>}
          {activeTab === 2 && <Typography>Content for Tab Three</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardTabs;
