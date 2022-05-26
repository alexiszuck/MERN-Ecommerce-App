import { styled } from '@mui/material/styles';
import { Stack, Box, Avatar, Badge, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import MERNButton from '../../ui/MERNButton/MERNButton';

function UserProfile({ setIsAuth }) {

  const user = {
    username: 'Lucinda Riddle',
    createdAt: new Date(),
    first_name: 'Lucinda',
    last_name: 'Riddle',
    country: 'Salem, Massachusetts',
    date_of_birth: '08.02.1987',
    shopping: 12,
    bonuses: '$10'
  }

  const handleLogout = () => {
    setIsAuth(false);
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const Card4Digits = styled('div')(({ theme }) => ({
    fontSize: '12px',
    color: grey[400],
    backgroundColor: grey[900],
    borderRadius: '4px',
    padding: '2px 3px',
    cursor: 'crosshair',
    boxSizing: 'border-box',
    '&:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    }
  }));

  const PersonalDataBar = ({ caption, value, hightlight }) => {
    return (
      <Stack direction='row' justifyContent='space-between'
        sx={{
          width: '100%',
          cursor: 'crosshair',
          padding: '5px 8px',
          borderRadius: '5px',
          '&:hover': {
            background: (theme) => `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          },
          '&:hover > div:first-of-type': {
            color: grey[900]
          }
        }}>
        <Typography component='div' sx={{ fontSize: '14px', color: grey[400], }}>{caption}</Typography>
        <Typography component='div'
          sx={{
            fontSize: '14px',
            color: grey[600],
            ...(hightlight && {
              backgroundColor: 'merndark.dark',
              borderRadius: '4px',
              padding: '2px 5px',
            })
          }}>
          {value}
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack alignItems="center" sx={{ position: 'relative' }}>
      <Box
        sx={{
          height: '160px',
          width: '100%',
          background: (theme) => `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: '0px 0px 50px 50px',
          paddingTop: '10px',
          textAlign: 'center'
        }}
      >
        <Typography component="div"
          sx={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 'bold',
          }}
        >
          M <Box display="inline" fontWeight="300">|</Box> E <Box display="inline" fontWeight="300">|</Box> R <Box display="inline" fontWeight="300">|</Box> N
        </Typography>
      </Box>
      <Box
        sx={{
          height: '520px',
          width: '85%',
          borderRadius: '10px',
          position: 'absolute',
          bgcolor: 'merndark.main',
          top: '80px',
        }}
      >
        <Stack alignItems="center">

          {/* Profile picture */}
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} variant="dot" sx={{ position: 'absolute', top: '-30px' }}>
            <Avatar src="user/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg" alt="User Profile"
              sx={{
                width: 56,
                height: 56,
              }}
            />
          </StyledBadge>

          {/* Username */}
          <Typography sx={{
            mt: 4,
            fontSize: '14px',
            fontWeight: 'bold',
          }}>
            {user.username}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: grey[500], }}>
            registered {`${user.createdAt.getDate()}/${user.createdAt.getMonth() + 1}/${user.createdAt.getFullYear()}`}
          </Typography>

          {/* Card */}
          <Stack justifyContent="space-evenly" alignItems="center"
            sx={{
              mt: 2,
              height: '100px',
              width: '90%',
              borderRadius: '10px',
              bgcolor: 'merngrey.main',
            }}>
            <Typography sx={{ fontSize: '12px', color: grey[400], }}>CARD NUMBER</Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ width: '80%' }}>
              <Card4Digits>4000</Card4Digits>
              <Card4Digits>1236</Card4Digits>
              <Card4Digits>3212</Card4Digits>
              <Card4Digits>9010</Card4Digits>
            </Stack>
            <Stack direction='row' justifyContent='space-between' sx={{ width: '80%' }}>
              <Typography sx={{ fontSize: '10px', color: grey[400], }}>12/24</Typography>
              <Typography sx={{ fontSize: '10px', color: grey[400], }}>CVV ***</Typography>
            </Stack>
          </Stack>

          {/* Personal Data. */}
          <Stack sx={{ width: '90%', paddingTop: '1rem' }} spacing={2} >
            <Box >
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>Personal Data.</Typography>
            </Box>
            <PersonalDataBar caption="Last name" value={user.last_name} />
            <PersonalDataBar caption="First name" value={user.first_name} />
            <PersonalDataBar caption="Country" value={user.country} />
            <PersonalDataBar caption="Date of Birth" value={user.date_of_birth} />
            <PersonalDataBar caption="Shopping" value={user.shopping} />
            <PersonalDataBar caption="Bonuses" value={user.bonuses} hightlight />
          </Stack>

        </Stack>

      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '630px',
          width: '85%',
          textAlign: 'right',
        }}
      >
        <MERNButton onClick={handleLogout}
          sx={{
            width: '10rem',
            fontWeight: 'light',
            color: 'primary.main'
          }}>
          Logout
        </MERNButton>
      </Box>


    </Stack>

  );
}

export default UserProfile;