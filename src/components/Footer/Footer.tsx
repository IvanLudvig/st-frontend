import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as FooterSVG } from '../../assets/footer.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        // clear: 'both',
        // position: 'absolute',
        // left: 0,
        zIndex: 1000,
        width: '100%',
        // height: 0,
        // display: 'table-row'
        bottom: 0,
        marginTop: '-100px'
        // marginTop: 'auto'
    },
    svg: {
        display: 'block'
    }
}));

export function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <FooterSVG className={classes.svg} />
        </div>
    );
}
