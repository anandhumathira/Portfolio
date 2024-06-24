import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{ background: "#242526", color: "#ffffff", padding: "3rem 3rem" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "#CE9552", textAlign: "center", fontWeight: 700 }}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={2} justifyContent="center"  style={{marginTop:'4rem'}}>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">Kollam,Kerala,India</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                anandhumathira1998@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body1">+91 8138877620</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
