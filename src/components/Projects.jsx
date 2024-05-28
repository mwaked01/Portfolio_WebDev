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

const Projects = (props) => {
  const [projectSelected, setProjectSelected] = useState(0)

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
    <section id="PROJECTS">
      <IconButton size="small" onClick={leftButtonClick}><ArrowBackIcon className="navButton" color="primary" fontSize="large" /></IconButton>
      {projectSelected === 0 ?
        <div className="project">
          <a href="https://github.com/emilyem1/go-forage">
            <h1 className="project_title">Go Forage</h1>
          </a>
          <div className="project-content">
            <img
              src={goForagePNG}
              alt="Go Forage"
              onMouseEnter={(e) => handleMouseEnter(e, goForageGIF)}
              onMouseLeave={(e) => handleMouseLeave(e, goForagePNG)}
            />
            <p>
              A single page application that connects mushroom foragers together and allows them to share blogs and map locations of their foraging spots.
            </p>
          </div>
        </div> : projectSelected === 1 ?
          <div className="project">
            <a href="https://github.com/mwaked01/Smart-TODO-List">
              <h1 className="project_title">Smart TO-DO List</h1>
            </a>
            <div className="project-content">
              <img
                src={smart_to_do_listPNG}
                alt="Smart TO-DO List"
                onMouseEnter={(e) => handleMouseEnter(e, smart_to_do_listGIF)}
                onMouseLeave={(e) => handleMouseLeave(e, smart_to_do_listPNG)}
              />
              <p>
                A multi-page application that automatically categorizes the user's entries into one of four categories.
                Front End: SASS, NodeJS
                Back End: PostgreSQL, Express
              </p>
            </div>
          </div> : projectSelected === 2 ?

            <div className="project">
              <a href="https://github.com/mwaked01/tweeter">
                <h1 className="project_title">Tweeter</h1>
              </a>
              <div className="project-content">
                <img
                  src={tweeterPNG}
                  alt="Tweeter"
                  onMouseEnter={(e) => handleMouseEnter(e, tweeterGIF)}
                  onMouseLeave={(e) => handleMouseLeave(e, tweeterPNG)}
                />
                <p>
                  A multi-page Airbnb clone that uses server-side JavaScript to display the information from queries to web pages via SQL queries.
                </p>
              </div>
            </div> : projectSelected === 3 ?

              <div className="project">
                <a href="https://github.com/mwaked01/photolabs">
                  <h1 className="project_title">PhotoLabs</h1>
                </a>
                <div className="project-content">
                  <img
                    src={photolabsPNG}
                    alt="PhotoLabs"
                    onMouseEnter={(e) => handleMouseEnter(e, photolabsGIF)}
                    onMouseLeave={(e) => handleMouseLeave(e, photolabsPNG)}
                  />
                  <p>
                    A single page application that allows the user to display photos filtered by category and gives them the option to save their favorite photos.
                  </p>
                </div>
              </div> : projectSelected === 4 ?

                <div className="project">
                  <a href="https://github.com/mwaked01/tinyapp">
                    <h1 className="project_title">TinyApp</h1>
                  </a>
                  <div className="project-content">
                    <img
                      src={tinyAppPNG}
                      alt="TinyApp"
                      onMouseEnter={(e) => handleMouseEnter(e, tinyAppGIF)}
                      onMouseLeave={(e) => handleMouseLeave(e, tinyAppPNG)}
                    />
                    <p>
                      TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.
                    </p>
                  </div>
                </div> :
                <div>Error Loading Projects</div>
      }
      <IconButton size="small" onClick={rightButtonClick}><ArrowForwardIcon className="navButton" color="primary" fontSize="large" /></IconButton>

    </section>
  );
};

export default Projects;

