import { createTheme } from '@mui/material/styles';

const ThemeMERN = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ff626d',
        },
        secondary: {
            main: '#fcad72',
        },
        merndark: {
            main: '#232227',
            dark: '#000000',
            light: '#4b494f',
            contrastText: '#ffffff',
        },
        merngrey: {
            main: '#333235',
            dark: '#0c0a0f',
            light: '#5c5b5f',
            contrastText: '#ffffff',
        },
        background: {
            default: '#232227',
        }
    },
});

export default ThemeMERN;