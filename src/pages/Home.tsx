import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import aboutme from "../images/aboutme.jpg";

const Home = () => {
    // return (
    //     <React.Fragment>
    //         <Header />
    //         <Particles />
    //     </React.Fragment>
    // );
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ display: "block", py: 3 }}>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: "primary.dark", display: "block" }}>
                    About me
                </Typography>
            </Box>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: "50%" }}
                    image={aboutme}
                    alt="About Me"
                />
                <Box sx={{ display: "flex", bgcolor: "secondary.light" }}>
                    <CardContent>
                        <Typography variant="h4" sx={{ color: "primary.dark", p: 1 }}>Introduction</Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            I am currently an penultimate undergraduate at Nanyang Technological University pursuing a Double Degree in Business and Computer Science.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            I am a leader who is able to adapt quickly to challenges and uncertainties. With an agile and growth mindset, I am able to work under pressure and grow in a competitive environment.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            I have experience for both software engineering and data analytics.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            I thrive in a challenging environment and enjoy the arduous pursuit of technical skills required to be successful in this industry. I look forward to the intellectual hurdles I would face along the journey and wish to be exposed to them as much as possible.
                        </Typography>
                        <Typography variant="h4" sx={{ color: "primary.dark", p: 1 }}>Skills</Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            Programming Languages: C/C++, Java, ARM assembly, HTML, CSS, SQL, NoSQL, Python, R, JavaScript, TypeScript, Unity, php
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            Frameworks: React, Express.js, Node.js, .NET, Laravel
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            Libraries: Redux, React-Bootstrap, Material UI, Sequelize, Scikit-learn, TensorFlow, Keras, randomForest, Xgboost, amCharts
                        </Typography>
                        <Typography variant="body1" sx={{ color: "primary.dark", p: 1 }}>
                            Applications: Tableau, PowerBI, Excel, Orange, Jupyter Notebook
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default Home;
