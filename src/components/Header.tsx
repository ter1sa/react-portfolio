import React from "react";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Mahmudul Alam"]} typeSpeed={40} />
            </Typography>

            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={[
                        "Frontend Developer",
                        "Backend Developer",
                        "Native App Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header;
