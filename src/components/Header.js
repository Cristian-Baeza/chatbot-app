import React from 'react';
import logo from '../images/logos.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative bg-gradient-to-b from-red-600 to-transparent h-36 p-4 flex items-center justify-center">
      {/* Centered Logo and Title */}
      <Link to='/' className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-full max-h-12 rounded-full" />
        <h1 className="text-white text-2xl font-semibold hover:underline font-retro bg-black bg-opacity-90 rounded-lg border-2 border-red-500 p-2">
          MEDTRIALS BOT
        </h1>
      </Link>

      {/* Right-aligned About Link */}
      <Link to="/about" className="absolute right-4 text-white font-semibold hover:underline font-retro bg-black bg-opacity-90 rounded-lg border-2 border-red-500 p-2">
        ABOUT
      </Link>
    </div>
  );
};

export default Header;
