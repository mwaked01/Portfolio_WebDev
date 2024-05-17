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

import Carousel from "react-material-ui-carousel";

const Projects = (props) => {
  const handleMouseEnter = (e, gifSrc) => {
    e.target.src = gifSrc;
  };

  const handleMouseLeave = (e, pngSrc) => {
    e.target.src = pngSrc;
  };

  return (
    <section id="PROJECTS">
      <Carousel
        autoPlay={true}
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        <div className="project">
          <a href="https://github.com/emilyem1/go-forage">
            <h1 className="project_title">Go Forage</h1>
          </a>
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

        <div className="project">
          <a href="https://github.com/mwaked01/Smart-TODO-List">
            <h1 className="project_title">Smart TO-DO List</h1>
          </a>
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

        <div className="project">
          <a href="https://github.com/mwaked01/tweeter">
            <h1 className="project_title">Tweeter</h1>
          </a>
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

        <div className="project">
          <a href="https://github.com/mwaked01/photolabs">
            <h1 className="project_title">PhotoLabs</h1>
          </a>
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

        <div className="project">
          <a href="https://github.com/mwaked01/tinyapp">
            <h1 className="project_title">TinyApp</h1>
          </a>
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
      </Carousel>
    </section>
  );
};

export default Projects;

