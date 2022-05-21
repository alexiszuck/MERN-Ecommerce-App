import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { orange, red, grey } from '@mui/material/colors';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import RedeemIcon from '@mui/icons-material/Redeem';

function NavBar() {
  const handleTopPromo = () => {
    console.log('open top promo');
  };

  const handleCart = () => {
    console.log('open cart');
  };

  const handleUser = () => {
    console.log('open user profile');
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
          color: grey[50],
          bgcolor: grey[800],
          fontSize: '0.7rem',
          fontWeight: 'bold',
          height: '2rem',
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
          color: grey[50],
          background: `linear-gradient(to right, ${red['A200']}, ${orange['A200']})`,
          boxShadow: 1,
        }}
      >
        <Grid item xs={6} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'initial', sm: 'center' } }}>
          <MenuIcon sx={{ display: { xs: 'block', sm: 'none' }, ml: 3, cursor: 'pointer', color: grey[800] }} onClick={handleMenu} />
          <Typography component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
              fontSize: { xs: '20px', md: '24px' },
              lineHeight: { xs: '28px', md: '32px' },
              fontWeight: 'bold',
              color: grey[800],
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
          <Button sx={{ color: grey[100], fontSize: '0.9rem' }} onClick={handleLinkHome}>Home</Button>
          <Button sx={{ color: grey[100], fontSize: '0.9rem' }} onClick={handleLinkCategories}>Categories</Button>
          <Button sx={{ color: grey[100], fontSize: '0.9rem' }} onClick={handleLinkContact}>Contact</Button>
          <Button sx={{ color: grey[100], fontSize: '0.9rem' }} onClick={handleLinkSupport}>Support</Button>
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
          <Avatar sx={{ bgcolor: grey[800], cursor: 'pointer' }} onClick={handleCart}>
            <ShoppingBasketIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: grey[800], cursor: 'pointer' }} onClick={handleUser}>
            <AccountCircleIcon />
          </Avatar>
        </Grid>
      </Grid>

    </Stack>
  );
};

export default NavBar;