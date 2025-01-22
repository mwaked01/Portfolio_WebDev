import React from 'react';
import {
  Code,
  Psychology,
  Fingerprint,
  Menu,
  Close,
  GitHub,
  LinkedIn
} from '@mui/icons-material';

import '../styles/MobileNav.scss';

const MobileNav = ({ isOpen, onToggle, activeTab, onTabChange }) => {
  const tabs = [
    { name: 'About Me', icon: <Fingerprint /> },
    { name: 'Projects', icon: <Code /> },
    { name: 'Skills', icon: <Psychology /> },
  ];

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <button className="mobile-nav-toggle" onClick={onToggle}>
        {!isOpen && <Menu />}
      </button>
      {isOpen && (
        <nav className="mobile-nav-tabs">
          <button className="mobile-nav-toggle" onClick={onToggle}>
            {isOpen && <Close />}
          </button>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`nav-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => onTabChange(tab.name)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      )}
      {!isOpen &&
        <div className='socials-container'>
          <a className='socials' href='https://linkedin.com/in/mohamed-waked-316899212'>
            <LinkedIn />
          </a>
          <a className='socials' href="https://github.com/mwaked01">
            <GitHub />
          </a>
        </div>
      }
    </div>
  );
};

export default MobileNav;

