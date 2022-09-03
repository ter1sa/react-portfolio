import * as React from "react"
import { styled, Theme, CSSObject, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AppsIcon from '@mui/icons-material/Apps';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Outlet, useNavigate } from "react-router-dom";
import { theme } from "./styles/Global";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const menuItems = [
    // { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
    // { listIcon: <AssignmentIcon />, listText: "Resume", listPath: "/resume" },
    { listIcon: <AppsIcon />, listText: "Portfolio", listPath: "/" },
    { listIcon: <ContactMailIcon />, listText: "Contact", listPath: "/contact" },
];

function Navigation() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" onClick={() => setOpen(!open)} sx={{ marginRight: 5, }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Teresa's Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} PaperProps={{
                    sx: {
                        backgroundColor: "secondary.light"
                    }
                }}>
                    <DrawerHeader />
                    <Divider />
                    <List>
                        {menuItems.map((item, i) => (
                            <ListItem
                                button
                                key={i}
                                onClick={() => {
                                    setOpen(false)
                                    navigate(item.listPath)
                                }}
                            >
                                <ListItemIcon>
                                    {item.listIcon}
                                </ListItemIcon>
                                <ListItemText primary={item.listText} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Outlet />
            </Box>
        </ThemeProvider>
    );
};

export default Navigation;