import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const DefaultLayout = ({ children }) => {
  return (
    <Stack>
      <NavBar />
      {children}
      <Footer />
    </Stack>
  );
};

export default DefaultLayout;
