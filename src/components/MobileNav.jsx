import React from 'react';
import { Code, Psychology, Fingerprint, Menu, Close } from '@mui/icons-material';
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
    </div>
  );
};

export default MobileNav;

