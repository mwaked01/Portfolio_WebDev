import { useState } from "react"
import "../styles/Projects.scss"
import goForagePNG from '/public/projects/goForage/goForage.png'
import photolabsPNG from '/public/projects/photolabs/photolabs.png'
import smart_to_do_listPNG from '/public/projects/smart_to_do_list/smart_to_do_list.png'
import tweeterPNG from '/public/projects/tweeter/tweeter.png'
import tinyAppPNG from '/public/projects/tinyApp/tinyApp.png'

import goForageGIF from '/public/projects/goForage/goForage.gif'
import photolabsGIF from '/public/projects/photolabs/photolabs.gif'
import smart_to_do_listGIF from '/public/projects/smart_to_do_list/smart_to_do_list.gif'
import tweeterGIF from '/public/projects/tweeter/tweeter.gif'
import tinyAppGIF from '/public/projects/tinyApp/tinyApp.gif'

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  const [projectSelected, setProjectSelected] = useState(0)

  const projects = {
    0: {
      name: "Go Forage",
      url: "https://github.com/emilyem1/go-forage",
      gif: goForageGIF,
      png: goForagePNG,
      description: "A single page application that connects mushroom foragers together and allows them to share blogs and map locations of their foraging spots."
    },
    1: {
      name: "Smart TO-DO List",
      url: "https://github.com/mwaked01/Smart-TODO-List",
      gif: smart_to_do_listGIF,
      png: smart_to_do_listPNG,
      description: "A multi-page application that automatically categorizes the user's entries into one of four categories. Front End: SASS, NodeJS Back End: PostgreSQL, Express"
    },
    2: {
      name: "Tweeter ",
      url: "https://github.com/mwaked01/tweeter",
      gif: tweeterGIF,
      png: tweeterPNG,
      description: "A multi-page Airbnb clone that uses server-side JavaScript to display the information from queries to web pages via SQL queries."
    },
    3: {
      name: "PhotoLabs",
      url: "https://github.com/mwaked01/photolabs",
      gif: photolabsGIF,
      png: photolabsPNG,
      description: "A single page application that allows the user to display photos filtered by category and gives them the option to save their favorite photos."
    },
    4: {
      name: "TinyApp",
      url: "https://github.com/mwaked01/tinyapp",
      gif: tinyAppGIF,
      png: tinyAppPNG,
      description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs."
    }
  }

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
          <OpenInNewIcon/>
        </a>

        <img
          src={projects[projectSelected].png}
          alt={projects[projectSelected].name}
          onMouseEnter={(e) => handleMouseEnter(e, projects[projectSelected].gif)}
          onMouseLeave={(e) => handleMouseLeave(e, projects[projectSelected].png)}
        />
        <p className="description">
          {projects[projectSelected].description}
        </p>
      </div>

      <IconButton size="small" onClick={rightButtonClick}><ArrowForwardIcon className="navButton" color="primary" fontSize="large" /></IconButton>

    </section>
  );
};

export default Projects;

