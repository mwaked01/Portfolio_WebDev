import "../styles/Projects.scss"
import goForageGIF from '/public/projects/goForage/goForage.gif'
import photolabsGIF from '/public/projects/photolabs/photolabs.gif'
import smart_to_do_listGIF from '/public/projects/smart_to_do_list/smart_to_do_list.gif'
import tweeterGIF from '/public/projects/tweeter/tweeter.gif'
import tinyAppGIF from '/public/projects/tinyApp/tinyApp.gif'

import Carousel from "react-material-ui-carousel";

const Projects = (props) => {
  return (
    <section id="PROJECTS" >
      <Carousel
        autoPlay={false}
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        <div>
          <a href="https://github.com/emilyem1/go-forage"><h1>Go Forage</h1></a>
          <img src={goForageGIF} alt="Skills Icon" />
          <p >
            A single page application that connects mushroom foragers together and allows them to share blogs and map locations of their foraging spots.
          </p>
        </div>

        <div>
          <a href="https://github.com/mwaked01/Smart-TODO-List"><h1>Smart TO-DO List</h1></a>
          <img src={smart_to_do_listGIF} alt="Skills Icon" />

          <p >
            A multi-page application that automatically categorizes the user's entries into one of four categories.
            Front End: SASS, NdoeJS
            Back End: postgresql, Express
          </p>
        </div>

        <div>
          <a href="https://github.com/mwaked01/tweeter"> <h1>Tweeter</h1></a>
          <img src={tweeterGIF} alt="Skills Icon" />
          <p >
            A multi-page Airbnb clone that uses server-side Javascript to display the information from queries to web pages via SQL queries.
          </p>
        </div>
        <div>

          <div>
            <a href="https://github.com/mwaked01/photolabs"><h1> PhotoLabs</h1></a>
          </div>
          <img src={photolabsGIF} alt="Skills Icon" />

          <p >
            A single page application that allows the user to display photos filtered by category and gives them the option to save their favorite photos.
          </p>
        </div>

        <div>
          <a href="https://github.com/mwaked01/tinyapp"><h1> TinyApp</h1></a>
          <img src={tinyAppGIF} alt="Skills Icon" />
          <p >
            TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default Projects;
