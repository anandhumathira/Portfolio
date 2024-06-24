import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  const menuItems = (
    <List>
      <ListItem button component="a" href="#home" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component="a" href="#about" onClick={toggleDrawer(false)}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component="a" href="#skill" onClick={toggleDrawer(false)}>
        <ListItemText primary="Skill" />
      </ListItem>
      <ListItem button component="a" href="#experience" onClick={toggleDrawer(false)}>
        <ListItemText primary="Experience" />
      </ListItem>
      <ListItem button component="a" href="#projects" onClick={toggleDrawer(false)}>
        <ListItemText primary="Project" />
      </ListItem>
      <ListItem button component="a" href="#contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#242526" }}>
        <Toolbar>
          <Container>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={3} container justifyContent="start">
                <Typography variant="h6" align="start" style={{ color: "#CE9552" }}>
                  Anandhu
                </Typography>
              </Grid>
              <Grid item>
                {isMobile ? (
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <>
                    <Button color="inherit" component="a" href="#home">Home</Button>
                    <Button color="inherit" component="a" href="#about">About</Button>
                    <Button color="inherit" component="a" href="#skill">Skill</Button>
                    <Button color="inherit" component="a" href="#experience">Experience</Button>
                    <Button color="inherit" component="a" href="#projects">Project</Button>
                    <Button color="inherit" component="a" href="#contact">Contact</Button>
                  </>
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#242526",
            color: "#FFFFFF",
          },
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 16px" }}>
          <Typography variant="h6" align="start" style={{ alignSelf: "center", color:'#CE9552' }}>
            Anandhu
          </Typography>
          <IconButton onClick={toggleDrawer(false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </div>
        {menuItems}
      </Drawer>
    </>
  );
};

export default Navbar;
