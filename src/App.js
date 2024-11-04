import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard2 from "./scenes/Dashboard/Dashboard2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide from '@mui/material/Slide';

function App() {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        setIsMobileDevice(isMobile);
    }, [isMobile]);

    return (
        <Box className="App" display="flex">
            <Router>
                {isMobileDevice ? null : <Sidebar/>}
                <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={500}>
                    <Box className="content" display="flex" sx={{
                        height: isMobileDevice ? "100vh" : "90vh",
                        width: isMobileDevice ? "100%" : "80%",
                        overflow:"auto",
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