import React from 'react';

const Header: React.FC = () => {
  return (
    <header className={`w-full flex flex-col items-center justify-center bg-gray-300 p-5`}>
      <h1 className={'text-gray-800 text-3xl font-bold'}>Micro-Frontend Project</h1>
      <h2 className={'text-gray-700 text-2xl mt-2'}>Shell Component</h2>
      <p className={'text-gray-600 text-sm italic mt-2'}>Click on a page in the side menu to navigate to its corresponding remote component</p>
    </header>
  );
};

export default Header;