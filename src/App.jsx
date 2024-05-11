import { useState, useRef, useEffect } from 'react'

import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import ParticlesComponent from './components/Particles'

import './App.css'

import Button from '@mui/material/Button';
import { GitHub, LinkedIn } from '@mui/icons-material';

function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");
  const contentRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const sections = contentRef.current.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
  };

  const [openContact, setOpenContact] = useState(false);
  const handleOpenContact = () => setOpenContact(true);

  return (
    <>
      <ParticlesComponent id='particles' />
      <header>
        <div id='greeting'>
          <div id='hi'>
            <h1 className="logo">Hi </h1>
            <div className='emoji'>👋</div>
          </div>
          <h1 className="logo">I'm Mohamed Waked </h1>
        </div>
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection} />
        <footer>
          <a href='https://linkedin.com/in/mohamed-waked-316899212'>
            <LinkedIn sx={{ fontSize: 40 }} />
          </a>
          <a href="https://github.com/mwaked01">
            <GitHub sx={{ fontSize: 40 }} />
          </a>
          <Button sx={{ width: "fit-content" }} variant="contained" color='success' onClick={handleOpenContact}>contact</Button>
        </footer>
      </header>

      <div className='sections' ref={contentRef}>

        <About />
        <Skills activeSection={activeSection} />

        <Projects />

        {openContact &&
          <Contact openContact={openContact} setOpenContact={setOpenContact} />
        }
      </div>
    </>
  )
}

export default App
