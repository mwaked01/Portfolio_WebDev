import goForagePNG from '/public/projects/goForage/goForage.png'
// import photolabsPNG from '/public/projects/photolabs/photolabs.png'
import smart_to_do_listPNG from '/public/projects/smart_to_do_list/smart_to_do_list.png'
import tweeterPNG from '/public/projects/tweeter/tweeter.png'
import tinyAppPNG from '/public/projects/tinyApp/tinyApp.png'
import HairByBrookePNG from '/public/projects/HairByBrooke/HairByBrooke.png'

import goForageGIF from '/public/projects/goForage/goForage.gif'
import photolabsGIF from '/public/projects/photolabs/photolabs.gif'
import smart_to_do_listGIF from '/public/projects/smart_to_do_list/smart_to_do_list.gif'
import tweeterGIF from '/public/projects/tweeter/tweeter.gif'
import tinyAppGIF from '/public/projects/tinyApp/tinyApp.gif'

const projectsData = {
  0: {
    name: "Go Forage",
    url: "https://github.com/emilyem1/go-forage",
    gif: goForageGIF,
    png: goForagePNG,
    description: "A single page application that connects mushroom foragers together and allows them to share blogs and map locations of their foraging spots.",
    techStack: "",
  },
  1: {
    name: "Smart TO-DO List",
    url: "https://github.com/mwaked01/Smart-TODO-List",
    gif: smart_to_do_listGIF,
    png: smart_to_do_listPNG,
    description: "A multi-page application that automatically categorizes the user's entries into one of four categories. Front End: SASS, NodeJS Back End: PostgreSQL, Express",
    techStack: "",
  },
  2: {
    name: "Tweeter ",
    url: "https://github.com/mwaked01/tweeter",
    gif: tweeterGIF,
    png: tweeterPNG,
    description: "A multi-page Airbnb clone that uses server-side JavaScript to display the information from queries to web pages via SQL queries.",
    techStack: "",
  },
  3: {
    name: "HairByBrooke",
    url: "https://beautybybrooke.netlify.app/",
    gif: HairByBrookePNG,
    png: HairByBrookePNG,
    description: "*An organizational tool designed to simplify client bookings, streamline data management, and provide an efficient way for my client to manage her daily schedule.",
    techStack: "This app leverages React and MUI for creating a dynamic and responsive user interface, alongside Express and MongoDB for robust backend and database management. Axios facilitates efficient API requests, while tools like emailjs-com and SweetAlert2 enhance user interaction.",
  },
  4: {
    name: "TinyApp ",
    url: "https://github.com/mwaked01/tinyapp",
    gif: tinyAppGIF,
    png: tinyAppPNG,
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.",
    techStack: "",
  }
}

export default projectsData;