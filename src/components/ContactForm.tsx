import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import Send from "@mui/icons-material/Send";

const Contact = () => {
    return (
        <Box component="div">
            <Grid container justifyContent="center">
                <Box component="form">
                    <Typography variant="h5" color="primary.main">
                        Hire or Contact me
                    </Typography>
                    <TextField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        sx={{ my: 1 }}
                    />
                    <TextField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        sx={{ my: 1 }}
                    />
                    <TextField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        sx={{ my: 1 }}
                        multiline
                        rows={4}
                    />
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<Send />}
                        type="submit"
                        sx={{ my: 1, bgcolor: "secondary", color: "primary.dark" }}
                    >
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contact;
