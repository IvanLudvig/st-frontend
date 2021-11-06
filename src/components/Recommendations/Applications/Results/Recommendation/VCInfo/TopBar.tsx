import React, { useEffect, useState } from 'react';
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Back } from '../../../../assets/icons/back.svg';
import { ReactComponent as Right } from '../../../../assets/icons/right.svg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    topBar: {
        marginTop: '28px',
        height: '31px',
        marginLeft: '26px',
        width: '500px',
    },
    backbtn: {
        display: 'inline-block',
        textAlign: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        borderRadius: '15px',
        color: '#2E2F33',
        width: '72px',
        height: '31px',
        textTransform: 'uppercase',
        fontSize: '10px',
        cursor: 'pointer'
    },
    label: {
        lineHeight: '27px',
        fontWeight: 500,
        marginLeft: '4px'
    },
    path: {
        display: 'inline-block',
        color: '#959DB5',
        fontSize: '12px',
        marginLeft: '44px'
    }
});

interface TopBarProps {
    title: string;
}
export default function TopBar({ title }: TopBarProps) {
    const classes = useStyles();

    return (
        <div className={classes.topBar}>
            <Link to='/recommendation-system/result'>
                <div className={classes.backbtn}>
                    <Back />
                    <span className={classes.label}>Назад</span>
                </div>
            </Link>
            <span className={classes.path}>
                Венчурные фонды <Right /> Zerno Ventures
            </span>
        </div>
    )
}
