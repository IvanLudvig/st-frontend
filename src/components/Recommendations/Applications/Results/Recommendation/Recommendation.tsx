import React, { useEffect, useState } from 'react';
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { Button, Checkbox } from '@material-ui/core';
import { ReactComponent as Watch } from '../../../../../assets/icons/watch.svg';
import Zerno from '../../../assets/zerno.jpg';
import { ReactComponent as TrashCan } from '../../../../../assets/icons/trash.svg';
import { Link } from 'react-router-dom';
import { imageMap } from '../../../../Step1/data';


const useStyles = makeStyles({
    result: {
        position: 'static',
        marginLeft: '31px',
        width: '947px',
        minHeight: '229px',
        boxShadow: '0px 4px 34px rgba(66, 76, 101, 0.08)',
        border: '1px solid #F8F8FB',
        borderRadius: '3px',
        paddingTop: '35px',
        marginBottom: '20px',
        paddingBottom: '20px'
    },
    topBar: {
        height: '42px',
        width: '912px',
        marginLeft: '16px',
        marginRight: '16px',
        display: 'inline-block'
        // lineHeight: '42px'
    },
    topBarLabel: {
        display: 'inline-block',
        color: '#0458FE',
        fontSize: '9px',
        textTransform: 'uppercase',
        position: 'relative',
        top: '-13px',
        cursor: 'pointer'
    },
    line: {
        width: '912px',
        border: '1px dashed #E3E6ED'
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
        color: '#69768F',
        background: '#0458FE',
        textTransform: 'uppercase',
        lineHeight: '25px',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '13px'
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
            background: lighten('#F2F3F6', 0.3),
        }
    },
    favbtnUn: {
        display: 'inline-block',
        lineHeight: '40px',
        borderRadius: '5px',
        alignText: 'center',
        border: '1px solid #D7DEF2',
        boxSizing: 'border-box',
        float: 'right',
        width: '40px',
        height: '40px',
        marginLeft: '12px',
        background: '#fff',
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
    },
    checkbox: {
        display: 'inline-block',
        width: '15px',
        margin: 0,
        padding: 0,
        marginTop: '-25px',
        color: '#0458FE',
        marginRight: '6px'
    },
    input: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    }
});


interface RecommendationProps {
    vc: any;
    type: string;
    id: number;
    selected: boolean;
    fav: boolean;
    setSelected: () => void;
}

export default function Recommendation({ vc, type, id, selected, fav, setSelected }: RecommendationProps) {
    const classes = useStyles();

    let fields = ['??????', '?????????? ??????????, $ ??????', '???????????????????? ????????????????????', 'Exit', '?????? ??????????????????'];
    let values = [`${vc['?????? ???? ?????????????????? ????????????-??????'] || ''}, ${vc['?????????? ??????????????????????????'] || ''}`, vc['?????????? ?????????? ????????????, $ ??????'], vc['???????????????????? ????????????????????'], vc['???????????????????? ??????????????'], vc['?????? ??????????????????']];
    if (type === 'ac') {
        fields = ['??? ????????????', '?????????????? ??????????????', '???????????? ??????????????????', '?????? ??????????????????'];
        values = [vc['??? ????????????'], vc['?????????????? ??????????????'], vc['???????????? ??????????????????'], vc['?????? ??????????????????']];
    }
    const applicationsPage = false;
    // @ts-ignore
    const image_src = imageMap[vc['???????????????? ??????????????']] || imageMap[vc['???????????????? ??????????????????']];
    return (
        <div className={classes.result}>
            <div className={classes.topBar}>
                <Checkbox className={classes.checkbox} checked={selected} onChange={setSelected}
                    inputProps={{
                        style: {
                            padding: 0,
                            margin: 0
                        }
                    }}
                    style={{
                        color: "#0458FE",
                    }}
                    classes={{ input: classes.input }}
                />
                <div className={classes.topBarLabel} onClick={setSelected}>
                    {selected ? '????????????' : '??????????????'}
                </div>
                <hr className={classes.line} />
            </div>
            <div className={classes.info}>
                <img className={classes.icon} src={image_src} />
                <div className={classes.titleContainer}>
                    <div className={classes.label}>
                        {type === 'vc' ? '?????????????????? ????????' : '??????????????????????'}
                    </div>
                    <div className={classes.title}>
                        {vc['???????????????? ??????????????'] || vc['???????????????? ??????????????????']}
                    </div>
                </div>

                <div className={classes.aboutContainer}>
                    <div className={classes.label}>
                        ?? ??????????
                    </div>
                    <div className={classes.about}>
                        {vc['????????????????']}
                    </div>
                </div>

                {vc['?????????? ????????????????????????????'] ?
                    <div className={classes.roundsContainer}>
                        <div className={classes.label}>
                            ???????????? ????????????????????????????
                        </div>
                        <div className={classes.rounds}>
                            {vc['?????????? ????????????????????????????']}
                        </div>
                    </div>
                    : <></>}
            </div>

            <hr className={classes.line2} />

            <div className={classes.bottombar}>

                <div className={classes.stats}>
                    {fields.map((field: string, i: number) =>
                        <>
                            {values[i] ?
                                <div className={classes.stat}>
                                    <div className={classes.statLabel}>
                                        {field}
                                    </div>
                                    <div className={classes.statNumber}>
                                        {values[i]}
                                    </div>
                                </div> : <></>}
                        </>
                    )}
                </div>

                <div className={classes.actions}>

                    {applicationsPage ?
                        <>
                            <div className={classes.label}>
                                ???????????? ????????????
                            </div>
                            <div>
                                <Watch />

                                <span className={classes.awaiting}>
                                    ???? ????????????????????????
                                </span>
                            </div>
                        </>
                        :
                        <>
                            <Button disabled className={classes.morebtn} variant='contained' component={Link} to={`/recommendation-system/result/${type}/${id}`}>
                                ??????????????????
                            </Button>

                            <div className={classes.favbtn} >
                                <TrashCan display='block' style={{ margin: 'auto', marginTop: '10px' }} />
                            </div>

                        </>
                    }

                </div>

            </div>

        </div>

    )
}
