import "@fontsource/ibm-plex-sans";
import { red } from "@material-ui/core/colors";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF1F55',
        },
        secondary: {
            main: '#FF1F55',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    zIndex: {
        appBar: 10,
        modal: 10,
        drawer: 10,
    },
    typography: {
        fontSize: 12,
        fontFamily: 'IBM Plex Sans'
    },

    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#2e3a59',
            },
        },
        MuiListItemIcon: {
            root: {
                color: '#ffffff',
            },
        },
        MuiToolbar: {
            regular: {
                height: '40px',
                '@media (min-width: 600px)': {
                    minHeight: '40px',
                },
            },
        },
        MuiFab: {
            root: {
                top: 'auto',
                right: '16px',
                bottom: '16px',
                left: 'auto',
                position: 'fixed',
                fontSize: '13px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }
        },
    },
});


export default theme;