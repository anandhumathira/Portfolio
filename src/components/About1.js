import React from "react";
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      id="about"
      style={{ background: "#242526", color: "#ffffff", padding: "3rem 3rem" }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {/* Image Column */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="./about2.jpg"
            alt="About me"
            className="img-fluid"
            style={{
              borderRadius: "5rem",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              
              transition: "filter 0.5s ease-in-out",
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%)"}
            onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(5%)"}
          />
        </Grid>

        {/* Content Column */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "#CE9552", textAlign: "center" }}
          >
            About Me
          </Typography>
          <Container>
            <Typography
              variant="body1"
              style={{ marginBottom: "1rem", textAlign: "center" }}
            >
              Hello! I'm Anandhu S, a passionate developer based in India. I
              have a strong foundation in front-end and MERN stack development.
              I am proficient in technologies
              like React, Node.js, MongoDB, and more.
            </Typography>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              I enjoy creating scalable web applications and solving complex
              problems. Currently, I am seeking new opportunities to further
              enhance my skills and contribute to innovative projects.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
