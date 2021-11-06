import React, { useEffect, useState } from 'react';
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { ReactComponent as StarIcon } from '../../../assets/icons/star.svg';
import { ReactComponent as Watch } from '../../../assets/icons/watch.svg';
import Zerno from '../../../assets/zerno.jpg';


const useStyles = makeStyles({
    result: {
        position: 'static',
        marginLeft: '31px',
        width: '947px',
        minHeight: '187px',
        boxShadow: '0px 4px 34px rgba(66, 76, 101, 0.08)',
        borderRadius: '3px',
        paddingTop: '35px',
        marginBottom: '20px',
        paddingBottom: '20px'
    },
    info: {
        display: 'inline-block',
        minHeight: '80px',
        width: '947px'
    },
    titleContainer: {
        verticalAlign: 'top',
        height: '80px',
        alignItems: 'top',
        display: 'inline-block',
        marginLeft: '22px',
        width: '150px',
        marginBottom: 'auto'
    },
    title: {
        color: '#000000',
        fontSize: '14px',
        fontWeight: 500
    },
    aboutContainer: {
        verticalAlign: 'top',
        minHeight: '100px',
        display: 'inline-block',
        marginLeft: '16px',
        width: '412px',
        marginBottom: 'auto'
    },
    label: {
        textTransform: 'uppercase',
        color: '#6D798F',
        fontSize: '8px',
        width: '150px',
        marginBottom: '6px'
    },
    about: {
        color: '#000000',
        fontSize: '12px',
        width: '412px'
    },
    roundsContainer: {
        verticalAlign: 'top',
        height: '80px',
        display: 'inline-block',
        marginLeft: '60px',
        width: '100px',
        marginBottom: 'auto'
    },
    rounds: {
        color: '#000000',
        fontSize: '12px',
        width: '100px'
    },
    bottombar: {
        width: '836px',
        marginLeft: '95px',
        height: '40px',
    },
    stats: {
        // width: '620px',
        height: '40px',
        float: 'left',
        // marginLeft: '95px'
    },
    actions: {
        // width: '620px',
        height: '40px',
        float: 'right',
        // marginLeft: '95px'
    },
    stat: {
        display: 'inline-block',
        borderRadius: '5px',
        border: '1px solid #7D8DAB33',
        // padding: '4px',
        marginRight: '5px'
    },
    statLabel: {
        marginTop: '7px',
        marginLeft: '12px',
        marginRight: '12px',
        color: '#7D8DAB',
        textTransform: 'uppercase',
        fontSize: '8px'
    },
    statNumber: {
        marginLeft: '12px',
        marginRight: '12px',
        marginBottom: '7px',
        color: '#000000',
        fontSize: '12px'
    },
    line2: {
        width: '846px',
        marginLeft: '97px',
        marginBottom: '30px',
        border: '1px dashed #E3E6ED'
    },
    morebtn: {
        display: 'inline-block',
        float: 'right',
        width: '115px',
        height: '40px',
        marginLeft: '12px',
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
    favbtn: {
        display: 'inline-block',
        lineHeight: '40px',
        borderRadius: '5px',
        alignText: 'center',
        float: 'right',
        width: '40px',
        height: '40px',
        marginLeft: '12px',
        color: '#0458FE',
        background: '#F2F3F6',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '13px',
        'cursor': 'pointer',
        '&:hover': {
            background: darken('#F2F3F6', 0.2),
        }
    },
    awaiting: {
        marginLeft: '4px',
        fontSize: '14px',
        color: '#FE1F55',
        lineHeight: '18px'
    },
    icon: {
        marginLeft: '15px',
        width: '60px',
        height: '60px'
    }
});


interface RecommendationProps {
    vc: any;
    id: number;
    selected: boolean;
    setShowVC: (id: number) => void;
}

export default function Recommendation({ vc, id, selected, setShowVC }: RecommendationProps) {
    const classes = useStyles();

    const fields = ['тип', 'Объем фонда, $ млн', 'Количество инвестиций', 'Exit', 'Год основания'];
    const values = [`${vc['Тип по источнику возник-ния']}, ${vc['Форма собственности']}`, vc['Общий объем фондов, $ млн'], vc['Количество инвестиций'], vc['Количество выходов'], vc['Год основания']];

    return (
        <div className={classes.result}>
            <div className={classes.info}>
                <img className={classes.icon}  />
                <div className={classes.titleContainer}>
                    <div className={classes.label}>
                        Венчурный фонд
                    </div>
                    <div className={classes.title}>
                        {vc['Название объекта']}
                    </div>
                </div>

                <div className={classes.aboutContainer}>
                    <div className={classes.label}>
                        О фонде
                    </div>
                    <div className={classes.about}>
                        {vc['Описание']}
                    </div>
                </div>

                <div className={classes.roundsContainer}>
                    <div className={classes.label}>
                        РАУНДЫ ИНВЕСТИРОВАНИЯ
                    </div>
                    <div className={classes.rounds}>
                        {vc['Раунд инвестирования']}
                    </div>
                </div>
            </div>

            <hr className={classes.line2} />

            <div className={classes.bottombar}>

                <div className={classes.stats}>
                    {fields.map((field: string, i: number) =>
                        <>
                            {values[i] &&
                                <div className={classes.stat}>
                                    <div className={classes.statLabel}>
                                        {field}
                                    </div>
                                    <div className={classes.statNumber}>
                                        {values[i]}
                                    </div>
                                </div>}
                        </>
                    )}
                </div>

                <div className={classes.actions}>

                    {selected ?
                        <>
                            <div className={classes.label}>
                                Статус заявки
                            </div>
                            <div>
                                <Watch />

                                <span className={classes.awaiting}>
                                    На рассмотрении
                                </span>
                            </div>
                        </>
                        :
                        <>
                            <Button className={classes.morebtn} variant='contained' onClick={() => setShowVC(id)}>
                                Подробнее
                            </Button>

                            <div className={classes.favbtn}>
                                <StarIcon display='block' style={{ margin: 'auto', marginTop: '10px' }} />
                            </div>
                        </>
                    }

                </div>

            </div>

        </div>

    )
}
