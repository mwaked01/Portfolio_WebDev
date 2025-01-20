import '../styles/Content.scss';
import ParticlesComponent from './Particles';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
const Content = ({ activeTab }) => {
  return (
    <div className="content">
      <div className="particles-wrapper">
        <ParticlesComponent className="particles" />
      </div>
      {activeTab === 'About Me' && (
        <About />
      )}
      {activeTab === 'Projects' && (
       <Projects/>
      )}
      {activeTab === 'Skills' && (
        <Skills/>
      )}
    </div>
  );
};

export default Content;

