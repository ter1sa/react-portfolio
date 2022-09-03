import { Box, Typography } from "@mui/material";
import Projects from "../components/Projects";

function Portfolio() {
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="primary.light">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Portfolio
                </Typography>
            </Box>
            <Box sx={{ px: 3 }} bgcolor="primary.light">
                <Projects />
            </Box>
        </Box>
    )
}

export default Portfolio;