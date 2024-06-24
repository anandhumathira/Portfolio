import React, { useEffect } from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "React", image: "./react.svg" }, // Replace with your actual image path
  { name: "Express", image: "./Express.svg" }, // Replace with your actual image path
  { name: "Node.js", image: "./nodejs.svg" }, // Replace with your actual image path
  { name: "MongoDB", image: "./mongodb.svg" }, // Replace with your actual image path
  { name: "npm", image: "./npm.svg" }, // Replace with your actual image path
  { name: "React Bootstrap", image: "./React Bootstrap.svg" }, // Replace with your actual image path
  { name: "Python", image: "./python.svg" }, // Replace with your actual image path
  { name: "MySQL", image: "./mysql.svg" }, // Replace with your actual image path
  { name: "Bootstrap", image: "./bootstrap.svg" }, // Replace with your actual image path
  { name: "JavaScript", image: "./javascript.svg" }, // Replace with your actual image path
  { name: "CSS", image: "./css3.svg" }, // Replace with your actual image path
  { name: "HTML", image: "./html5.svg" }, // Replace with your actual image path
];

const Skill = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skill">
      <div style={{ padding: "2rem", background: "#242526", color: "#ffffff" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#CE9552", marginBottom: "2rem", marginTop: "2rem" }}
        >
          My Skill
        </Typography>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={{
                      maxWidth: isMobile ? "50%" : "20%",
                      height: "auto",
                      marginBottom: "1rem",
                    }}
                  />
                  <Typography variant="h6" component="h2" gutterBottom>
                    {skill.name}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
