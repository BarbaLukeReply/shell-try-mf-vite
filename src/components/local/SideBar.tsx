import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="w-64 bg-gray-300 text-gray-800 overflow-auto">
        <div className="flex flex-col items-center justify-center p-5">
          <div className="text-3xl font-bold">Menu</div>
          <p className="text-gray-600 text-sm italic mt-2">Shell Component</p>
        </div>
        <nav className="mt-10 text-right">
          <Link className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md" to="/page1">Page 1</Link>
          <Link className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md mt-4" to="/page2">Page 2</Link>
          {/* Aggiungi altre voci di menu qui */}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;