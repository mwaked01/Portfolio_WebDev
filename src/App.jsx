import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

import './App.css'

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

  return (
    <>
      <header>
        <h1>Hi 👋</h1>
        <h1>I'm Mohamed Waked</h1>
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}/>
      </header>

      <div className='sections' ref={contentRef}>
        <section id="ABOUT" >
          <h2>ABOUT ME</h2>
          <p>
            Motivated professional who is eager to
            transition into a career in Web Development.
            Highly motivated self starter with a strong passion
            for programming. Committed to continuous learning
            and staying up-to-date with the latest industry trends.
            Looking forward to embracing new challenges.
          </p>
        </section>

        <Skills activeSection={activeSection} />

      </div>
    </>
  )
}

export default App
