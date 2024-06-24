import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Typography, Grow, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [showingHeading, setShowingHeading] = useState(true);
  const [currentVisibleChars, setCurrentVisibleChars] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if mobile initially

  const headings = [
    "Front-End Developer",
    "Mern Stack Developer",
    "Back-End Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowingHeading(false); // Start erasing the current heading

      setTimeout(() => {
        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % headings.length
        ); // Cycle through headings
        setShowingHeading(true); // Start showing the next heading
        setCurrentVisibleChars(0); // Reset visible characters count
      }, 100); // Time to wait after erasing (adjust as needed)
    }, 8000); // Time interval for each heading (adjust as needed)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout;
    if (showingHeading) {
      timeout = setTimeout(() => {
        setCurrentVisibleChars((prevChars) => prevChars + 1);
      }, 100); // Adjust typing speed (100ms per character)
    } else {
      timeout = setTimeout(() => {
        setCurrentVisibleChars((prevChars) => prevChars - 1);
      }, 50); // Adjust erasing speed (50ms per character)
    }

    // Clear timeout on component unmount or when showingHeading changes
    return () => clearTimeout(timeout);
  }, [showingHeading, currentVisibleChars]);

  const visibleHeading = headings[currentHeadingIndex].slice(
    0,
    currentVisibleChars
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width threshold as needed
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home">
      <div
        className="container-fluid"
        style={{ background: "#242526", color: "#ffffff" }}
      >
        <div className="row">
          <div
            className="col-md-6 order-md-1 order-2"
            style={{
              marginTop: isMobile ? "5rem" : "13rem",
              marginBottom: isMobile ? "5rem" : "10rem",
            }}
          >
            <Grow in={true} timeout={500}>
              <div>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{ minHeight: "1em" }}
                >
                  {visibleHeading}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  style={{
                    alignSelf: "center",
                    color: "#CE9552",
                    marginTop: "1rem",
                  }}
                >
                  Hello! I'm Anandhu S, A Developer based in India.
                </Typography>
                <div style={{ marginTop: "1rem" }}>
                  <a
                    href="https://github.com/anandhumathira"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#CE9552", marginRight: "1rem" }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anandhu-s-330420200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#CE9552", marginRight: "1rem" }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a
                    href="mailto:anandhumathira1998@gmail.com"
                    style={{ color: "#CE9552", marginRight: "1rem" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </a>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="./Anandhu.pdf"
                    download
                    style={{ backgroundColor: "#CE9552", color: "#ffffff" }}
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </Grow>
          </div>
          <div
            className="col-md-6 order-md-2 order-1"
            style={{
              display: "flex",
              justifyContent:isMobile ? "center" : "center",
              alignItems: "center",
              marginTop: "6rem",
            }}
          >
            <img
              src="./123.png"
              className="img-fluid"
              alt="About me"
              style={{
                borderRadius: "45%",
                width: isMobile ? "50vw" : "25vw",
                height: isMobile ? "50vw" : "25vw",
                objectFit: "cover",
                justifyItems:'right',
                
                
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
