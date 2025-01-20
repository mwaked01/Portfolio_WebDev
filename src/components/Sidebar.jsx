import React from 'react';
import { Code, Psychology, Fingerprint, GitHub, LinkedIn } from '@mui/icons-material';
import '../styles/Sidebar.scss';

const Sidebar = ({ activeTab, onTabChange, isDarkMode }) => {
  const tabs = [
    { name: 'About Me', icon: <Fingerprint /> },
    { name: 'Projects', icon: <Code /> },
    { name: 'Skills', icon: <Psychology /> },
  ];

  return (
    <aside className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* <div className="headshot-container">
        <img src="/path-to-your-headshot.jpg" alt="Headshot" className="headshot" />
      </div> */}
      <nav className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`nav-tab ${activeTab === tab.name ? 'active' : ''} `}
            onClick={() => onTabChange(tab.name)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
      <footer  >
        <a className='socials'  href='https://linkedin.com/in/mohamed-waked-316899212'>
          <LinkedIn  sx={{ fontSize: 40 }} />
        </a>
        <a className='socials' href="https://github.com/mwaked01">
          <GitHub sx={{ fontSize: 40 }} />
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;

