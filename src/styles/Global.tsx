import { createTheme } from "@mui/material";

const theme = createTheme(
    {
        palette: {
            primary: {
                light: "#B7D3F2",
                main: "#AFAFDC",
                dark: "#8A84E2",
            },
            secondary: {
                light: "#79BEEE",
                main: "#84AFE6",
            },
        },
        typography: {
            button: {
                textTransform: "none",
            },
        },
    },
    { overrides: { MUIDataTableToolbar: { root: { display: "none" } } } }
);

export { theme };