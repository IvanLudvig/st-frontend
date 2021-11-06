import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: '358px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: 5,
    },
    paper: {
        background: '#fff',
        border: 'none',
        zIndex: 5,
    },
    drawerOpen: {
        width: '358px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClosed: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '96px'
    },
    listItem: {
        height: '42px',
        width: '358px',
        padding: 0,
        '&:hover': {
            background: fade('#E1E4F4', 0.5),
        }
    },
    selected: {
        backgroundColor: '#FFC94D',
    },
    listItemText: {
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#1D2435',
        marginLeft: '16px'
    },
    listItemTextSelected: {
        display: 'inline-block',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#000',
        marginLeft: '16px'
    },
    iconContainer: {
        display: 'inline-block',
        marginLeft: '20px',
        width: '50px',
        height: '44px',
        padding: '14px 16px 12px 16px',
        marginRight: '8px'
    }, 
    logo: {
        marginTop: 26,
        marginLeft: 21
    },
    burgerIconContainer: {
        height: '75px',
        borderBottom: '1px solid #E2EBF9'
    },
    burgerIcon: {
        marginTop: 40,
        marginLeft: 38
    }
}));

export default useStyles;
