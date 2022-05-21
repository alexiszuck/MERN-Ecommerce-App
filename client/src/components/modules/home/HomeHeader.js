import React from 'react';
import SearchBar from './HomeSearchBar';
import PromotionBanner from './HomePromotionBanner';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';

const HomeHeader = () => {
  return (
    <Stack component="header" direction={{ xs: 'column', sm: 'column-reverse' }} alignItems="center" spacing={{ xs: 2, sm: 8}}>
      <Typography component="div"
        sx={{
          display: { xs: 'block', sm: 'none' },
          paddingTop: '20px',
          cursor: 'pointer',
          fontSize: '2rem',
          lineHeight: '2.25rem',
          fontWeight: 'bold',
          color: red['A200'],
        }}
      >
        M <Box display="inline" fontWeight="300">|</Box> E <Box display="inline" fontWeight="300">|</Box> R <Box display="inline" fontWeight="300">|</Box> N
      </Typography>
      <SearchBar />
      <PromotionBanner />
    </Stack>
  );
};

export default HomeHeader;
