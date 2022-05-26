import { Stack, Box, Typography, Link, FormControlLabel, TextField } from "@mui/material";
import MERNButton from '../../ui/MERNButton/MERNButton';
import MERNCheckbox from '../../ui/MERNCheckbox/MERNCheckbox';

function Login({ setIsAuth }) {
    const handleLogin = () => {
        setIsAuth(true);
    }

    return (
        <Stack alignItems='center'>
            <Box
                sx={{
                    width: '100%',
                    padding: '10px',
                    background: (theme) => `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }}
            >
                <Stack alignItems='center' spacing={2}>
                    <Box sx={{ width: '70%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <Typography align="left" sx={{ fontSize: '20px', fontWeight: 'bold' }}>Login.</Typography>
                    </Box>
                    <TextField id='username' label='username' variant='standard' color='merndark'
                        defaultValue='lucinda'
                    />
                    <TextField id='password' label='password' type='password' autoComplete='current-password' variant='standard' color='merndark'
                        defaultValue="Riddle"
                    />
                    <Box sx={{ width: '67%', textAlign: 'left' }}>
                        <FormControlLabel control={<MERNCheckbox />} label='remember me' 
                            sx={{
                                fontSize: '10px',
                                '.MuiFormControlLabel-label': {
                                    fontSize: '12px',
                                }
                            }}/>
                    </Box>
                    <Box sx={{ paddingTop: '1.2rem', width: '80%' }}>
                        <MERNButton onClick={handleLogin}
                            sx={{
                                width: '100%',
                                fontWeight: 'light',
                            }}>
                            Login
                        </MERNButton>
                    </Box>
                    <Box sx={{ paddingBottom: '2rem' }}>
                        <Link href="#" sx={{ color: 'secondary.contrastText', fontSize: '10px' }}>
                            Forgot password?
                        </Link>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ paddingTop: '1rem', paddingBottom: '1rem', width: '100%', bgcolor: 'merndark.main', textAlign: 'center' }}>
                <Link href="#" sx={{ color: 'merndark.contrastText', fontSize: '14px', }}>
                    {"Don't have an account? Sign Up 🎉"}
                </Link>
            </Box>
        </Stack>
    );
}

export default Login;