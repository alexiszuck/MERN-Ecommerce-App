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
        },
        merngrey: {
            main: '#333235',
        },
        background: {
            default: '#232227',
        }
    },
});

export default ThemeMERN;