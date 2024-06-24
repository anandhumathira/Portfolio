import React, { memo } from 'react';
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';

const TimelineItemMemoized = memo(TimelineItem);

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const experiences = [
    {
      title: "Mern Stack Developer",
      subtitle: "Softzane Solutions, Ayur",
      description: "As a Software Development Intern at Softzne Solutions, I actively contributed to various stages of the software development lifecycle while gaining valuable hands-on experience in a professional environment.",
      year: "2023 - Present",
    },
  ];

  return (
    <section id="experience" style={{ background: "#242526", padding: "4rem 0" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#CE9552", textAlign: "center", fontWeight: 700 }}
      >
        Experience
      </Typography>
      <Grid container justifyContent="center" style={{ marginTop: '5rem' }}>
        <Grid item xs={12} md={10} lg={8}>
          <Timeline position={isMobile ? 'left' : 'alternate'}>
            {experiences.map((exp, index) => (
              <TimelineItemMemoized key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body1" style={{ color: "#ffffff", fontSize: isMobile ? 18 : 25, textAlign: isMobile ? 'center' : 'left' }}>
                      {exp.year}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6" component="h2" gutterBottom style={{ color: "#ffffff", fontSize: 25 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: 18, lineHeight: 1.5,color:'#ffffff' }}>
                      {exp.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineItemMemoized>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </section>
  );
};

export default Experience;
