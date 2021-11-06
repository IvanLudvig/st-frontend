import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { NavDrawer } from './NavDrawer/NavDrawer';
import HeaderBar from './HeaderBar/HeaderBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import Step1 from './Step1/Step1';
import { Grid } from '@material-ui/core';
import MainPage from './MainPage/MainPage';
import Recommendations from './Recommendations/Recommendations';
import VCInfo from './Recommendations/Recommendation/VCInfo/VCInfo';
import { ReactComponent as Menu } from '../assets/menu.svg';


const useStyles = makeStyles({
    root: {
        width: '1366px',
        fontFamily: 'IBM Plex Sans',
        background: '#24314A',
        height: '100%',
        display: 'flex',
        flexFlow: 'column'
    },
    sidebarContainer: {
        flex: 100,
        position: 'absolute',
        height: '100%',
        width: '358px',
        top: 0,
        bottom: '-1000px',
        background: '#24314A',
        backgroundColor: '#24314A',
    },
    sidebar: {
        width: '358px'
    },
    content: {
        // flex: '1 1 auto',
        flex: 100,
        width: '1008px',
        // display: 'inline-block',
        position: 'absolute',
        // height: '100%'
    }
});


export default function Main() {
    const classes = useStyles();

    const [selected, setSelected] = useState([false, false]);

    return (
        <Router>
            <div className={classes.root}>
                <HeaderBar />


                <div className={classes.sidebarContainer}>
                    {/* <img className={classes.sidebar} src={Menu} /> */}
                    <Menu className={classes.sidebar} />
                </div>

                    {/* <NavDrawer /> */}
                    {/* <Route exact path="/recommendation-system/vc/:i" render={() => <VCInfo selected={selected} setSelected={setSelected} />} /> */}
                    <Route exact path="/recommendation-system/result" render={() => <Recommendations selected={selected} setSelected={setSelected} />} />
                    <Route exact path="/recommendation-system/" component={Step1} />
                    <Route exact path="/" component={MainPage} />


            </div>


        </Router>
    )
}
