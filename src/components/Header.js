import React from 'react';
import logo from '../images/logos.png';

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-red-600 to-transparent h-24 p-4 flex items-center justify-center">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-full max-h-12 rounded-full" />
        <h1 className="text-white text-xl font-semibold">MEDTRIALS BOT</h1>
      </div>
    </div>
  );
};

export default Header;
