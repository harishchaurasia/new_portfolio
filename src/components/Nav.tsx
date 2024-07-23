import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-white bg-opacity-80 text-black shadow-md rounded-full z-50">
      <ul className="flex items-center h-8 text-sm space-x-4">
        <li className={`font-ComicNeue font-bold px-4 py-2 rounded-full ${activeSection === 'home' ? 'bg-green-200' : 'bg-gray-200'}`}>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('home')}>
            Work
          </Link>
        </li>
        <li className={`font-ComicNeue font-bold px-4 py-2 rounded-full ${activeSection === 'about' ? 'bg-green-200' : 'bg-gray-200'}`}>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('about')}>
            About
          </Link>
        </li>
        <li className={`font-ComicNeue font-bold px-4 py-2 rounded-full ${activeSection === 'play' ? 'bg-green-200' : 'bg-gray-200'}`}>
          <Link to="play" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('play')}>
            Play
          </Link>
        </li>
        <li className={`font-ComicNeue font-bold px-4 py-2 rounded-full ${activeSection === 'notes' ? 'bg-green-200' : 'bg-gray-200'}`}>
          <Link to="notes" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('notes')}>
            Notes
          </Link>
        </li>
        <li className={`font-ComicNeue font-bold px-4 py-2 rounded-full ${activeSection === 'contact' ? 'bg-green-200' : 'bg-gray-200'}`}>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onSetActive={() => handleSetActive('contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
