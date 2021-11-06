import React, { useEffect, useState } from 'react';
import { darken, makeStyles } from "@material-ui/core/styles";
import { recommendation_types } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators/Accelerators';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as Stack } from '../../assets/stack.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    content: {
        position: 'relative',
        width: '1008px',
        top: '93px',
        marginLeft: '358px',
        display: 'inline-block',
        height: '100%',
        background: '#fff',
        marginBottom: '93px'
    },
    header: {
        background: '#24314A',
        width: '1008px',
        height: '89px'
    },
    title: {
        height: '89px',
        position: 'relative',
        color: '#fff',
        left: '30px',
        top: '25px',
        fontWeight: 'bold',
        fontSize: '30px'
    },
    bar: {
        background: '#F2F3F6',
        width: '1008px',
        height: '64px'
    },
    fav: {
        float: 'right',
        textTransform: 'uppercase',
        color: '#69768F',
        fontSize: '14px',
        marginTop: '23px',
        marginRight: '41px',
        '&:hover': {
            color: darken('#69768F', 0.3),
        }
    },
    all: {
        float: 'left',
        textTransform: 'uppercase',
        color: '#69768F',
        fontSize: '14px',
        marginTop: '23px',
        marginLeft: '41px',
        '&:hover': {
            color: darken('#69768F', 0.3),
        }
    },
    icon: {
        marginBottom: '-2px',
        marginRight: '6px'
    },
    btn: {
        display: 'inline-block',
        float: 'right',
        width: '204px',
        height: '40px',
        marginRight: '60px',
        color: '#fff',
        background: '#0458FE',
        textTransform: 'uppercase',
        lineHeight: '25px',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '13px',
        '&:hover': {
            background: darken('#0458FE', 0.2),
        }
    },
});

interface RecommendationsListProps {
    vcs: any;
    accs: any;
    selected: any;
    favVC: number[];
    setFavVC: (value: number[]) => void;
    favACC: number[];
    setFavACC: (value: number[]) => void;
}

export default function Favourites({ vcs, accs, selected, favVC, setFavVC, favACC, setFavACC }: RecommendationsListProps) {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.header}>

                <div className={classes.title}>
                    Избранное
                    <Button className={classes.btn} variant='contained' component={Link} to={`/recommendation-system/result/risk-warning`}>
                        Сформировать заявки
                    </Button>
                </div>


            </div>
            <div className={classes.bar}>
                <Link to='/recommendation-system/result/applications'>
                    <span className={classes.fav}>
                        <Stack className={classes.icon} />
                        Мои заявки
                    </span>
                </Link>

                <Link to='/recommendation-system/result/favorites'>
                    <span className={classes.fav}>
                        <Star className={classes.icon} />
                        Мои избранные
                    </span>
                </Link>

                <Link to='/recommendation-system/result'>
                    <span className={classes.all}>
                        Все результаты
                    </span>
                </Link>
            </div>
            {Object.keys(vcs).length ?
                <VCFunds vcs={vcs} selected={selected['vc']} favList={favVC} setFav={setFavVC} />
                : <></>
            }
            {Object.keys(accs).length ?
                <Accelerators vcs={accs} selected={selected['ac']} favList={favACC} setFav={setFavACC} />
                : <></>
            }
        </div>

    )
}
