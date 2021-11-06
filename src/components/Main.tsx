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


const useStyles = makeStyles({
    root: {
        width: '1366px',
        fontFamily: 'IBM Plex Sans',
        background: '#fff',
    }
});


export default function Main() {
    const classes = useStyles();

    useEffect(() => {
        document.body.style.backgroundColor = '#F2F3F6';
    }, []);
    const [selected, setSelected] = useState([false, false]);

    return (
        <Router>



            <div className={classes.root}>

                <NavDrawer />
                <HeaderBar />
                {/* <Route exact path="/recommendation-system/vc/:i" render={() => <VCInfo selected={selected} setSelected={setSelected} />} /> */}
                <Route exact path="/recommendation-system/result" render={() => <Recommendations selected={selected} setSelected={setSelected} />} />
                <Route exact path="/recommendation-system/" component={Step1} />
                <Route exact path="/" component={MainPage} />

            </div>

            {/* <Grid xs={12}>
                    <Footer />
                </Grid> */}

        </Router>
    )
}
