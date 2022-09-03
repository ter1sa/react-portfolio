import { Box, Typography } from "@mui/material";
import Timeline from "../components/Timeline";

function Resume() {
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Resume
                </Typography>
            </Box>
            <Box sx={{ px: 3 }} bgcolor="secondary.main">
                <Timeline />
            </Box>
        </Box>
    )
}

export default Resume;