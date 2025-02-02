import { useState, useMemo } from "react"
import "../styles/Projects.scss"
import projectsData from '../data/projectsData';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  const [projectSelected, setProjectSelected] = useState(0)
  const projects = useMemo(() => projectsData, []);

  const rightButtonClick = () => {
    let nextProject = projectSelected;
    nextProject = nextProject + 1;
    if (nextProject > 4) {
      nextProject = 0
    }
    setProjectSelected(nextProject);
  };
  const leftButtonClick = () => {
    let prevProject = projectSelected;
    prevProject = prevProject - 1;
    if (prevProject < 0) {
      prevProject = 4
    }
    setProjectSelected(prevProject);
  };
  const handleMouseEnter = (e, gifSrc) => {
    e.target.src = gifSrc;
  };

  const handleMouseLeave = (e, pngSrc) => {
    e.target.src = pngSrc;
  };


  return (
    <section className="projects">
      <IconButton size="small" onClick={leftButtonClick}><ArrowBackIcon className="navButton" color="primary" fontSize="large" /></IconButton>

      <div className="project">
        <a className="project-title"
          href={projects[projectSelected].url}>
          <h1 >{projects[projectSelected].name}</h1>
          <OpenInNewIcon />
        </a>

        <img
          className={projectSelected === 3 ? "phone-app" : ""}
          src={projects[projectSelected].png}
          alt={projects[projectSelected].name}
          onMouseEnter={(e) => handleMouseEnter(e, projects[projectSelected].gif)}
          onMouseLeave={(e) => handleMouseLeave(e, projects[projectSelected].png)}
        />
        <p className="description">
          {projects[projectSelected].description}
          <br />
          {projects[projectSelected].techStack}
        </p>
      </div>

      <IconButton size="small" onClick={rightButtonClick}><ArrowForwardIcon className="navButton" color="primary" fontSize="large" /></IconButton>

    </section>
  );
};

export default Projects;

