import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

const MERNButton = styled(Button)(({ theme }) => ({
    color: theme.palette.merndark.contrastText,
    backgroundColor: theme.palette.merndark.main,
    textTransform: 'none',
    borderRadius: '30px',
    '&:hover': {
        backgroundColor: theme.palette.merndark.light,
    },
}));

export default MERNButton;