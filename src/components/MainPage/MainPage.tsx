import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MainPage0 from '../../assets/mainpage0.png';
import MainPage1 from '../../assets/mainpage1.png';
import MainPage2 from '../../assets/mainpage2.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/menu.svg';

const useStyles = makeStyles({
    content: {
        display: 'inline-block',
        position: 'absolute',
        width: '1008px',
        top: '93px',
        left: '358px',
        fontFamily: 'IBM Plex Sans',
        background: '#ff0000',
        // paddingBottom: '1800px',
        // height: '1500px'
        // height: '100%',
    },
    bar: {
        margin: 0,
        display: 'inline-block',
        position: 'absolute',
        top: '163px',
        left: 0,
        background: '#24314A',
        width: '1008px',
        height: '80px'
    },
    title: {
        display: 'inline-block',
        color: '#fff',
        lineHeight: '80px',
        fontSize: '30px',
        fontWeight: 500,
        marginLeft: '34px'
    },
    btn: {
        display: 'inline-block',
        float: 'right',
        top: 0,
        right: 0,
        height: '100%',
        width: '252px',
        background: '#1F5EFF',
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'uppercase',
        color: '#fff',
        cursor: 'pointer',
        textAlign: 'center',
        verticalAlign: 'center',
        paddingTop: '20px'
    },
    img: {
        margin: 0,
        width: '1008px'
    },
    img1: {
        margin: 0,
        position: 'absolute',
        left: 0,
        top: '243px',
        width: '1008px'
    },
    img2: {
        margin: 0,
        position: 'absolute',
        left: 0,
        top: '694px',
        width: '1008px',
        marginBottom: '1200px'
    },
    sidebarContainer: {
        position: 'absolute',
        height: '1353px',
        width: '358px',
        top: 0,
        background: '#24314A',
        backgroundColor: '#24314A',
    },
    sidebar: {
        width: '358px'
    }
});


export default function MainPage() {
    const classes = useStyles();


    return (
        <>
            <div className={classes.sidebarContainer}>
                <Menu className={classes.sidebar} />
            </div>
            <div className={classes.content}>
                <img src={MainPage0} className={classes.img} />
                <div className={classes.bar}>
                    <span className={classes.title}>
                        Стартапам и технологическим компаниям
                    </span>
                    <Link to='/recommendation-system'>
                        <div className={classes.btn}>
                            Рекомендательные системы для стартапов
                        </div>
                    </Link>
                </div>
                <img src={MainPage1} className={classes.img1} />
                <img src={MainPage2} className={classes.img2} />
            </div>
        </>
    )
}
