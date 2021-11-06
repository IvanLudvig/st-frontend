import React from 'react';
import { ReactComponent as SearchSVG } from '../../assets/search.svg';
import { ReactComponent as RegsVG } from '../../assets/reg.svg';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    appBar: {
        width: '1008px',
        position: 'absolute',
        height: '93px',
        background: "#fff",
        boxShadow: 'none',
        left: '358px'
    },
    search: {
        position: 'absolute',
        left: '30px',
        top: '24px'
    },
    reg: {
        position: 'absolute',
        left: '688px',
        top: '0px'
    }
}));

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.appBar}>
            <SearchSVG className={classes.search} />
            <RegsVG className={classes.reg} />
        </div>
    );
}
