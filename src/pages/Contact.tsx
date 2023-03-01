import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <Box sx={{ flexGrow: 1, p: 8, minHeight: "100vh" }} bgcolor="secondary.main">
            <Box sx={{ px: 3, pt: "20vh" }} bgcolor="secondary.main">
                <ContactForm />
            </Box>
        </Box>
    )
}

export default Contact;