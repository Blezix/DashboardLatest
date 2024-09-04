import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard/Dashboard";
function App() {
  return (
    <Box className="App" display="flex">
      <Sidebar />
      <Box className="content" width="100%" display="flex">
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
