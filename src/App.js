import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard2 from "./scenes/Dashboard/Dashboard2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide from '@mui/material/Slide';

function App() {
    return (
        <Box className="App" display="flex">
            <Router>
                <Sidebar />
                <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={500}>
                    <Box className="content" display="flex" sx={{
                        height: "90vh",
                        width: "80%",
                        overflowX: "hidden",
                        overflowY: "scroll",
                        background: "#ffffffd4",
                        mt: "auto",
                        mb: "auto",
                        borderRadius: "15px"
                    }}>
                        <Routes>
                            <Route path="/" element={<Dashboard2 />} />
                            <Route path="/ApiForm" />
                        </Routes>
                    </Box>
                </Slide>
            </Router>
        </Box>
    );
}

export default App;