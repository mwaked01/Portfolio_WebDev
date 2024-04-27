import { SettingsSuggest, LibraryBooks, BugReportOutlined, HomeRepairService } from '@mui/icons-material';
import "../styles/Skills.scss"

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


const Skills = (props) => {
  const { activeSection } = props;
  return (
    <section id="SKILLS" >
      {activeSection === "SKILLS" &&
        <div>
          <div className='title'>
            <h3>
              <SettingsSuggest fontSize='large' className='title_icon' color='info' />
              Development
            </h3>
            <div className='sub-section'>
              <div className="icon">
                <img src={javascriptIcon} alt="Skills Icon" />
                JavaScript
              </div>
              <div className="icon">
                <img src={pythonIcon} alt="Skills Icon" />
                Python
              </div>
              <div className="icon">
                <img src={railIcon} alt="Skills Icon" />
                Ruby on Rails
              </div>
              <div className="icon">
                <img src={htmlIcon} alt="Skills Icon" />
                HTML5
              </div>
              <div className="icon">
                <img src={cssIcon} alt="Skills Icon" />
                CSS3
              </div>
              <div className="icon">
                <img src={sassIcon} alt="Skills Icon" />
                SASS
              </div>
            </div>
          </div>

          <div className='title'>
            <h3>
              <LibraryBooks fontSize='large' className='title_icon' color='info' />
              Frameworks/ Libraries
            </h3>
            <div className='sub-section'>
              <div className="icon">
                <img src={reactIcon} alt="Skills Icon" />
                React
              </div>
              <div className="icon">
                <img src={expressIcon} alt="Skills Icon" />
                Express
              </div>
              <div className="icon">
                <img src={jqueryIcon} alt="Skills Icon" />
                JQuery
              </div>
              <div className="icon">
                <img src={bootstrapIcon} alt="Skills Icon" />
                Bootstrap
              </div>
              <div className="icon">
                <img src={muiIcon} alt="Skills Icon" />
                MaterialUI
              </div>
            </div>
          </div>

          <div className='title'>
            <h3>
              <BugReportOutlined fontSize='large' className='title_icon' color='info' />
              Testing
            </h3>
            <div className='sub-section'>
              <div className="icon">
                <img src={cypressIcon} alt="Skills Icon" />
                Cypress
              </div>
              <div className="icon">
                <img src={jestIcon} alt="Skills Icon" />
                Jest
              </div>
              <div className="icon">
                <img src={mochaIcon} alt="Skills Icon" />
                Mocha
              </div>
              <div className="icon">
                <img src={chaiIcon} alt="Skills Icon" />
                Chai
              </div>
            </div>
          </div>
          <div className='title'>
            <h3>
              <HomeRepairService fontSize='large' className='title_icon' color='info' />
              SYSTEMS AND TOOLS
            </h3>
            <div className='sub-section'>
              <div className="icon">
                <img src={postgresqlIcon} alt="Skills Icon" />
                PostgreSQL
              </div>
              <div className="icon">
                <img src={vscodeIcon} alt="Skills Icon" />
                Visual Studio
              </div>
              <div className="icon">
                <img src={gitIcon} alt="Skills Icon" />
                Git
              </div>
              <div className="icon">
                <img src={figmaIcon} alt="Skills Icon" />
                Figma
              </div>
            </div>
          </div>
        </div>
      }
    </section>

  );
};

export default Skills;
