import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard2 from "./scenes/Dashboard/Dashboard2";
import Dashboard from "./scenes/Dashboard/Dashboard";
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
function App() {
    return (
        <Box className="App" display="flex">

                    <Sidebar />

            <Slide direction={"up"} in={true} timeout={1000}>
                <Box className="content"  display="flex" sx={{
                    height:"90vh",
                    width:"80%",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    background:"#ffffffd4",
                    mt:"auto",
                    mb:"auto",
                    borderRadius:"15px"
                }}>
                    <Dashboard2 />
                </Box>
            </Slide>

        </Box>
    );
}

export default App;