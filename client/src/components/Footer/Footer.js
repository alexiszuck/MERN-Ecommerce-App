import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red, grey } from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer() {
  return (
    <Stack direction={{xs: 'column-reverse', md: 'row'}} justifyContent="space-evenly" alignItems="center" bgcolor={grey[800]} height={96}>
      <Typography component="div"
        sx={{
          display: { xs: 'none', md: 'block' },
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: red['A200'],
        }}
      >
        M <Box display="inline" fontWeight="300">|</Box> E <Box display="inline" fontWeight="300">|</Box> R <Box display="inline" fontWeight="300">|</Box> N
      </Typography>
      <Typography component="div"
        sx={{
          color: grey[200],
          fontSize: '0.9rem'
        }}
      >
        M|E|R|N <CopyrightIcon sx={{ fontSize: '0.9rem', verticalAlign: 'middle' }} /> 2022. All Rights and Wrongs Reserved.
      </Typography>
      <Stack direction="row" justifyContent="space-between" gap={3}>
        <FacebookIcon sx={{ fontSize: '1.2rem', color: grey[200], cursor: 'pointer' }} />
        <TwitterIcon sx={{ fontSize: '1.2rem', color: grey[200], cursor: 'pointer' }} />
        <InstagramIcon sx={{ fontSize: '1.2rem', color: grey[200], cursor: 'pointer' }} />
        <LinkedInIcon sx={{ fontSize: '1.2rem', color: grey[200], cursor: 'pointer' }} />
      </Stack>
    </Stack>
  )
}

export default Footer;