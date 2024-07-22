import React from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between p-4 bg-[#1a1a1a] text-red-800">
      <h1 className="font-imperfect items-center h-8 text-2xl ml-8">Harish</h1>
      <ul className="flex font-imperfect items-center h-8 text-sm space-x-4 mr-8">
        <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
