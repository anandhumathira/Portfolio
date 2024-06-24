import React from 'react';
import { Typography, Grid, Card, CardContent, Chip, Button, useTheme, useMediaQuery, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StyledCard = styled(Card)({
  backgroundColor: '#1B1B1D',
  color: '#ffffff',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const useStyles = {
  cardContent: {
    color: '#ffffff',
    flexGrow: 1,
    paddingBottom: '16px !important',
  },
  chip: {
    marginRight: '8px',
    marginBottom: '8px',
    color: '#CE9552',
    borderColor: '#CE9552',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    objectFit: 'cover',
  },
};

const projects = [
  {
    title: 'Rural Employment Portal',
    description: `The Rural Employment Portal is a web-based platform developed using 
Django, a high-level Python web framework, and SQLite for efficient 
data management. This project aims to bridge the gap between rural job 
seekers and employers by providing a user-friendly and accessible online 
platform.`,
    technologies: ['Python', 'Django', 'SQLite'],
    imageUrl: '/project1.png',
    githubLink: 'https://github.com/anandhumathira/Rural-Employment-Portal',
  },
  {
    title: 'Employee Management System',
    description: 'The Employee Management System using Node.js with MySQL is a comprehensive solution designed to streamline and automate various aspects of employee management within an organization. This system aims to provide an efficient and user-friendly platform for managing employee information, attendance, and other related tasks.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Express.js', 'MySQL'],
    imageUrl: '/project2.png',
    githubLink: 'https://github.com/anandhumathira/Employee-Management-System',
  },
  {
    title: 'Ecommerce Website',
    description: 'The E-commerce Website project aims to develop a robust and scalable online platform using Node.js as the server-side runtime and MongoDB as the database, providing users with an intuitive and secure shopping experience while offering administrators a powerful tool to manage products, orders, and user data.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Express.js', 'MongoDB'],
    imageUrl: '/project3.png',
    githubLink: 'https://github.com/anandhumathira/Employee-Management-System',
  },
  {
    title: 'Personal Website',
    description: 'The Personal Website project aims to develop a visually appealing and interactive online platform using HTML for structuring content, CSS for styling, Bootstrap for responsive design, and JavaScript for dynamic functionality, providing users with an engaging and user-friendly experience while offering administrators a powerful tool to manage personal data and information.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imageUrl: '/project4.png',
    githubLink: 'https://github.com/anandhumathira/my-work/tree/main',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section id="projects" style={{ background: '#242526', padding: '4rem 0' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#CE9552', textAlign: 'center', fontWeight: 700 }}>
        Projects
      </Typography>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={isMobile ? 2 : 4} style={{ marginTop: '2rem' }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation every time the element is in view
    threshold: 0.1,    // Trigger when 10% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} // Ensure consistent width and height
    >
      <StyledCard style={{ width: '100%', height: '100%' }}>
        <CardContent style={useStyles.cardContent}>
          <img src={project.imageUrl} alt={project.title} style={useStyles.image} />
          <Typography variant="h6" component="h2" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            {project.description}
          </Typography>
          <div style={{ marginTop: '1rem' }}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} variant="outlined" style={useStyles.chip} />
            ))}
          </div>
        </CardContent>
        <div style={{ padding: '1rem', borderTop: '1px solid #3C3C3C', display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" color="primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
        </div>
      </StyledCard>
    </motion.div>
  );
};

export default Projects;
