import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/0jty0e7po/feature_mag-feature_art-space_food_MhxQD-96Q.webp')",
      }}
    >
      <Header />
      <div className="flex-grow overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
