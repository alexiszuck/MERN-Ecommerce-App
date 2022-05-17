import React from 'react';

import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const DefaultLayout = ({ children }) => {
  return (
    <div className='flex flex-col bg-mern-dark'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
