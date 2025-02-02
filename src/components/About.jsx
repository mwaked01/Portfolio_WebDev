import { useTypingEffect } from "../hooks/useTypingEffect";
import '../styles/About.scss';
const About = () => {

  const aboutMeText = `I design and code full-stack applications that combine thoughtful design with seamless usability. 
  By working closely with my clients, I craft web apps tailored to their vision, 
  enhancing productivity through the integration of organizational platforms for local businesses.
  Beyond my passion for coding, I enjoy designing and 3D printing functional 
  objects that solve everyday problems or enhance convenience in my clients' lives.`;

  const displayedText = useTypingEffect(aboutMeText, 5)

  return (
    <section id="ABOUT">
      <div id="greeting">
        <h1 className="logo">Hi </h1>
        <div className="emoji">👋</div>
        <h1 className="logo">I'm Mohamed Waked,</h1>
      </div>
      <div className="terminal-card">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="terminal-content">
          {displayedText}
          <span className="cursor">|</span>
        </div>
      </div>

    </section>
  );
};

export default About;
