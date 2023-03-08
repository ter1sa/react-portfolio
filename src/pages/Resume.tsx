import React, { useRef, useEffect } from 'react';
import { Box, Typography } from "@mui/material";


function Resume() {
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    Resume
                </Typography>
            </Box>
            <iframe src="https://drive.google.com/file/d/1gKC7zyn3FvC89FK7bPXtbgRQC4D1IgUN/preview" width="100%" height="90%" allow="autoplay"></iframe>
        </Box>
    )
}

export default Resume;