import { useState } from 'react'

import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Content from './components/Content';
import ConnectButton from './components/ConnectButton';
import ThemeToggle from './components/ThemeToggle';
import Contact from './components/Contact'
import './styles/App.scss';

function App() {
  //newstyle:
  const [activeTab, setActiveTab] = useState('About Me');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileNavOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  }

  const [openContact, setOpenContact] = useState(false);
  const handleOpenContact = () => setOpenContact(true);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} isDarkMode={isDarkMode} />
      <main className="main-content">
        <MobileNav
          isOpen={isMobileNavOpen}
          onToggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <Content activeTab={activeTab} />
        <ConnectButton handleOpenContact={handleOpenContact} />
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </main>
      {openContact &&
        <Contact openContact={openContact} setOpenContact={setOpenContact} />
      }
    </div>
  )
}

export default App
