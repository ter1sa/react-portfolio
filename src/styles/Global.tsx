import { createTheme } from "@mui/material";
import "@mui/material/styles";


declare module '@mui/material/styles/createPalette' {
    interface Palette {
        bg?: Palette['primary'];
    }
    interface PaletteOptions {
        bg?: PaletteOptions['primary'];
    }
}

const theme = createTheme(
    {
        palette: {
            primary: { main: "#003a37" },
            secondary: { main: "#e2dfd5" },
            // bg: { main: "#e2dfd5" }
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