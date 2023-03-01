import React, { useRef, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import Timeline from "../components/Timeline";
import WebViewer from "@pdftron/webviewer"
import resume from "../pdf/New_Resume.pdf"


function Resume() {
    const viewer = useRef<HTMLDivElement>(null);

    // if using a class, equivalent of componentDidMount 
    useEffect(() => {
        WebViewer(
            {
                path: 'lib',
                initialDoc: resume,
            },
            viewer.current as HTMLDivElement,
        ).then((instance) => { });
    }, []);

    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ display: "flex", py: 3 }}>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    Resume
                </Typography>
            </Box>
            <div ref={viewer} style={{ height: '100vh' }}></div>
        </Box>
    )
}

export default Resume;