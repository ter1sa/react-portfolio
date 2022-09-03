import React from "react";
import Header from "../components/Header";
import Particles from "../components/Particles";
import { Box, Typography } from "@mui/material";

const Home = () => {
    // return (
    //     <React.Fragment>
    //         <Header />
    //         <Particles />
    //     </React.Fragment>
    // );
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="primary.light">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Hello, welcome to my portfolio XD
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;
