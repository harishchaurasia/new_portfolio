import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-9 p-4 rounded-full bg-[#484848] bg-opacity-90 text-slate-50 shadow-md z-50">
      <ul className="flex items-center h-1 mx-4 space-x-8">
        <li className={`font-aloe font-regular text-2xl py-6 pl-4 rounded-full ${activeSection === 'home' ? 'bg-opacity-0' : 'bg-opacity-90'} hover:bg-opacity-70`}>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('home')}>
            Home
          </Link>
        </li>
        <li className={`font-aloe font-regular text-2xl py-2 pl-4 rounded-full ${activeSection === 'about' ? 'bg-opacity-0' : 'bg-opacity-90'} hover:bg-opacity-70`}>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('about')}>
            About
          </Link>
        </li>
        <li className={`font-aloe font-regular text-2xl pl-4 rounded-full ${activeSection === 'projects' ? 'bg-opacity-0' : 'bg-opacity-90'} hover:bg-opacity-70`}>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('projects')}>
            Projects
          </Link>
        </li>
        <li className={`font-aloe font-regular text-2xl pl-4 rounded-full ${activeSection === 'contact' ? 'bg-opacity-0' : 'bg-opacity-90'} hover:bg-opacity-70`}>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
