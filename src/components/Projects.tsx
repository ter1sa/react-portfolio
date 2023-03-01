import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "primary.light",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        marginBottom: "3rem",
        marginRight: "1rem",
        marginLeft: "1rem"
    },
}));

const projects = [
    {
        name: "Project 1",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
        image: project1,
    },
    {
        name: "Project 2",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
        image: project2,
    },
    {
        name: "Project 3",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
        image: project3,
    },
    {
        name: "Project 4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
        image: project4,
    },
    {
        name: "Project 5",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
        image: project5,
    },
    {
        name: "Project 6",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
        image: project6,
    },
];

const Projects = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer} sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
                {/* Projects */}
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;

