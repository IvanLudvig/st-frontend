import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { NavDrawer } from './NavDrawer/NavDrawer';
import HeaderBar from './HeaderBar/HeaderBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import Step1 from './Step1/Step1';
import { Grid } from '@material-ui/core';
import MainPage from './MainPage/MainPage';
import VCInfo from './Recommendations/Recommendation/VCInfo/VCInfo';
import { ReactComponent as Menu } from '../assets/menu.svg';
import Recommendations from './Recommendations/Recommendations';
import { moneyOptions, stageRows } from './Step1/data';


const useStyles = makeStyles({
    root: {
        width: '1366px',
        fontFamily: 'IBM Plex Sans',
        background: '#24314A',
        height: '100%',
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
    }
});


export default function Main() {
    const classes = useStyles();
    const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(stageRows.flat().length).fill(false));
    const [market, setMarket] = useState<string>('');
    const [stage, setStage] = useState<string>('');
    const [tech, setTech] = useState<string[]>([]);
    const [money, setMoney] = useState([1, moneyOptions.length]);

    return (
        <Router>
            <div className={classes.root}>
                <HeaderBar />


                <div className={classes.sidebarContainer}>
                    <Menu className={classes.sidebar} />
                </div>

                <Route path="/recommendation-system/result" render={() =>
                    <Recommendations
                        checkboxes={checkboxes}
                        setCheckboxes={setCheckboxes}
                        market={market}
                        setMarket={setMarket}
                        stage={stage}
                        setStage={setStage}
                        tech={tech}
                        setTech={setTech}
                        money={money}
                        setMoney={setMoney}
                    />} />

                <Route exact path="/recommendation-system/" render={() =>
                    <Step1
                        checkboxes={checkboxes}
                        setCheckboxes={setCheckboxes}
                        market={market}
                        setMarket={setMarket}
                        stage={stage}
                        setStage={setStage}
                        tech={tech}
                        setTech={setTech}
                        money={money}
                        setMoney={setMoney}
                    />} />
                <Route exact path="/" component={MainPage} />
            </div>
        </Router>
    )
}
