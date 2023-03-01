import { Box, Typography } from "@mui/material";
import Projects from "../components/Projects";

function Portfolio() {
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    Portfolio
                </Typography>
            </Box>
            <Box bgcolor="secondary.main">
                <Projects />
            </Box>
        </Box>
    )
}

export default Portfolio;