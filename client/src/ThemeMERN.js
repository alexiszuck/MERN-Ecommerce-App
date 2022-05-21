import { createTheme } from '@mui/material/styles';

const ThemeMERN = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#ff626d',
        },
    },
});

export default ThemeMERN;