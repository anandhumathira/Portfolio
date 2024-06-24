import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skill from './components/Skill';
import About from './components/About1';
import Experience from './components/Experience';
import Project from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
