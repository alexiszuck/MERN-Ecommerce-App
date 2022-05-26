import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Drawer from '@mui/material/Drawer';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import RedeemIcon from '@mui/icons-material/Redeem';

import UserProfile from '../UserProfile/UserProfile';
import Login from '../Login/Login';

function NavBar() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleTopPromo = () => {
    console.log('open top promo');
  };

  const handleCart = () => {
    console.log('open cart');
  };

  const toggleUserProfile = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;

    setShowUserProfile(prev => !prev);
  };

  const handleMenu = () => {
    console.log('drop menu');
  };

  const handleLinkHome = () => {
    console.log('link home');
  };

  const handleLinkCategories = () => {
    console.log('link categories');
  };

  const handleLinkContact = () => {
    console.log('link contact');
  };

  const handleLinkSupport = () => {
    console.log('link support');
  };

  return (
    <Stack>
      <Box onClick={handleTopPromo}
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          color: 'merndark.contrastText',
          bgcolor: 'merndark.main',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          height: '1.8rem',
          width: '100%',
          cursor: 'pointer'
        }}
      >
        <RedeemIcon sx={{ mr: 1, mb: '3px' }} fontSize="small" /><Typography variant="inherit">FREE SHIPPING ON ORDER OF 50 DOLLARS</Typography>
      </Box>
      <Grid container
        sx={{
          height: '3.5rem',
          width: '100%',
          background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          boxShadow: 1,
        }}
      >
        <Grid item xs={6} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'initial', sm: 'center' } }}>
          <MenuIcon sx={{ display: { xs: 'block', sm: 'none' }, ml: 3, cursor: 'pointer', color: 'merndark.main' }} onClick={handleMenu} />
          <Typography component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
              fontSize: { xs: '20px', md: '24px' },
              lineHeight: { xs: '28px', md: '32px' },
              fontWeight: 'bold',
              color: 'merndark.main',
            }}
          >
            M <Box display="inline" fontWeight="300">|</Box> E <Box display="inline" fontWeight="300">|</Box> R <Box display="inline" fontWeight="300">|</Box> N
          </Typography>
        </Grid>

        <Grid item sm={6}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button sx={{ color: 'primary.contrastText', fontSize: '0.9rem' }} onClick={handleLinkHome}>Home</Button>
          <Button sx={{ color: 'primary.contrastText', fontSize: '0.9rem' }} onClick={handleLinkCategories}>Categories</Button>
          <Button sx={{ color: 'primary.contrastText', fontSize: '0.9rem' }} onClick={handleLinkContact}>Contact</Button>
          <Button sx={{ color: 'primary.contrastText', fontSize: '0.9rem' }} onClick={handleLinkSupport}>Support</Button>
        </Grid>

        <Grid item xs={6} sm={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'flex-end', sm: 'center' },
            gap: 2,
            paddingRight: { xs: '1rem', sm: '0' }
          }}
        >
          <Fab size="small" onClick={handleCart}
            sx={{
              color: 'merndark.contrastText',
              bgcolor: 'merndark.main',
              '& > :hover': {
                color: 'merndark.main',
              }
            }}
          >
            <ShoppingBasketIcon />
          </Fab>
          <Fab size="small" onClick={toggleUserProfile}
            sx={{
              color: 'merndark.contrastText',
              bgcolor: 'merndark.main',
              '& > :hover': {
                color: 'merndark.main',
              }
            }}
          >
            <AccountCircleIcon />
          </Fab>
          <Drawer
            anchor='right'
            open={showUserProfile}
            onClose={toggleUserProfile}
          >
            <Box sx={{ width: 320 }}>
              {
                isAuth ? <UserProfile setIsAuth={setIsAuth} /> : <Login setIsAuth={setIsAuth} />
              }
            </Box>
          </Drawer>
        </Grid>
      </Grid>

    </Stack>
  );
};

export default NavBar;