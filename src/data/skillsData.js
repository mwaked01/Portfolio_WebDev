import {
    SettingsSuggest,
    LibraryBooks,
    BugReportOutlined,
    HomeRepairService
} from '@mui/icons-material';
import javascriptIcon from '/public/icons/javascript.svg'
import pythonIcon from '/public/icons/python.svg'
import railIcon from '/public/icons/rails.svg'
import htmlIcon from '/public/icons/html.svg'
import cssIcon from '/public/icons/css.svg'
import sassIcon from '/public/icons/sass.svg'

import reactIcon from '/public/icons/react.svg'
import expressIcon from '/public/icons/express.svg'
import jqueryIcon from '/public/icons/jquery.svg'
import bootstrapIcon from '/public/icons/bootstrap.svg'
import muiIcon from '/public/icons/mui.svg'

import cypressIcon from '/public/icons/cypress.svg'
import jestIcon from '/public/icons/jest.svg'
import mochaIcon from '/public/icons/mocha.svg'
import chaiIcon from '/public/icons/chai.svg'

import postgresqlIcon from '/public/icons/postgresql.svg'
import vscodeIcon from '/public/icons/vscode.svg'
import gitIcon from '/public/icons/git.svg'
import figmaIcon from '/public/icons/figma.svg'

const skillsData = [
    {
        category: "Development",
        categoryIcon: SettingsSuggest,
        skill: [
            {
                name: "JavaScript",
                icon: javascriptIcon,
            },

            {
                name: "Python",
                icon: pythonIcon,
            },
            {
                name: "Ruby on Rails",
                icon: railIcon,
            },
            {
                name: "HTML5",
                icon: htmlIcon,
            },
            {
                name: "CSS3",
                icon: cssIcon,
            },
            {
                name: "SASS",
                icon: sassIcon,
            }
        ]
    },
    {
        category: "Frameworks/ Libraries",
        categoryIcon: LibraryBooks,
        skill: [
            {
                name: "React",
                icon: reactIcon,
            },

            {
                name: "Express",
                icon: expressIcon,
            },
            {
                name: "JQuery",
                icon: jqueryIcon,
            },
            {
                name: "Bootstrap",
                icon: bootstrapIcon,
            },
            {
                name: "MaterialUI",
                icon: muiIcon,
            }
        ]
    },
    {
        category: "Testing",
        categoryIcon: BugReportOutlined,
        skill: [
            {
                name: "Cypress",
                icon: cypressIcon,
            },

            {
                name: "Jest",
                icon: jestIcon,
            },
            {
                name: "Mocha",
                icon: mochaIcon,
            },
            {
                name: "Chai",
                icon: chaiIcon,
            }
        ]
    },
    {
        category: "SYSTEMS",
        categoryIcon: HomeRepairService,
        skill: [
            {
                name: "PostgreSQL",
                icon: postgresqlIcon,
            },

            {
                name: "Visual Studio",
                icon: vscodeIcon,
            },
            {
                name: "Git",
                icon: gitIcon,
            },
            {
                name: "Figma",
                icon: figmaIcon,
            }
        ]
    }
]
export default skillsData;