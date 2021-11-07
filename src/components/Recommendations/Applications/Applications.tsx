import React, { useEffect, useState } from 'react';
import { darken, lighten, makeStyles } from "@material-ui/core/styles";
import { recommendation_types } from '../../Step1/data';
import VCFunds from '../VCs/VCFunds';
import VCInfo from '../Recommendation/VCInfo/VCInfo';
import Accelerators from '../Accelerators/Accelerators';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { ReactComponent as Stack } from '../../../assets/stack.svg';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';


const useStyles = makeStyles({
    content: {
        position: 'relative',
        width: '1008px',
        top: '93px',
        marginLeft: '358px',
        display: 'inline-block',
        height: '100%',
        marginBottom: '93px',
        background: '#fff'
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
    dialogTitle: {
        color: '#000000',
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    btn: {
        marginTop: '23px',
        float: 'left',
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
    btn1: {
        marginTop: '23px',
        float: 'left',
        width: '182px',
        height: '40px',
        marginLeft: '12px',
        color: '#fff',
        background: '#0458FE',
        textTransform: 'uppercase',
        lineHeight: '25px',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '13px',
        marginBottom: '22px',
        '&:hover': {
            background: darken('#0458FE', 0.2),
        }
    },
    btn2: {
        marginTop: '23px',
        float: 'left',
        width: '96px',
        height: '40px',
        marginLeft: '12px',
        color: '#8A94A8',
        background: '#D9DEE9',
        textTransform: 'uppercase',
        lineHeight: '25px',
        borderRadius: '5px',
        fontWeight: 600,
        fontSize: '13px',
        marginRight: '21px',
        marginBottom: '22px',
        '&:hover': {
            background: darken('#D9DEE9', 0.2),
        }
    },
    dialogBlock: {
        height: '160px'
    },
    blockTitle: {
        color: '#000000',
        marginTop: '13px',
        marginBottom: '13px'
    },
    blocksubTitle: {
        color: '#B5B9C0',
        marginTop: '13px',
        marginBottom: '13px',
        fontSize: '12px'
    },
    blockChooser: {
        width: '324px',
        height: '65px',
        marginLeft: '28px',
        marginRight: '28px',
        border: '1px solid #F2F2F2',
        borderRadius: '3px',
        padding: '14px 13px 13px 29px'
    },
    blockOption: {
        display: 'inline-block',
        width: '26px',
        height: '26px',
        marginRight: '4px',
        border: '1px solid #7D8DAB',
        boxSizing: 'border-box',
        color: '#000000',
        borderRadius: '5px',
        paddingLeft: '8px',
        transition: 'background 0.3s',
        '&:hover': {
            background: lighten('#0458FE', 0.8)
        }
    },
    blockOptionSelected: {
        background: '#0458FE',
        display: 'inline-block',
        width: '26px',
        height: '26px',
        marginRight: '4px',
        border: '1px solid #7D8DAB',
        boxSizing: 'border-box',
        color: '#000000',
        borderRadius: '5px',
        paddingLeft: '8px',
    },
    blockOption10: {
        display: 'inline-block',
        width: '26px',
        height: '26px',
        marginRight: '4px',
        border: '1px solid #7D8DAB',
        boxSizing: 'border-box',
        color: '#000000',
        borderRadius: '5px',
        paddingLeft: '4px',
        transition: 'background 0.3s',
        '&:hover': {
            background: lighten('#0458FE', 0.8)
        }
    },
    blockOptionSelected10: {
        background: '#0458FE',
        display: 'inline-block',
        width: '26px',
        height: '26px',
        marginRight: '4px',
        border: '1px solid #7D8DAB',
        boxSizing: 'border-box',
        color: '#000000',
        borderRadius: '5px',
        paddingLeft: '4px',
    },
    bad: {
        color: '#B5B9C0',
        fontSize: '8px',
        marginTop: '7px',
        float: 'left',
        textTransform: 'uppercase'
    },
    good: {
        color: '#B5B9C0',
        fontSize: '8px',
        marginTop: '7px',
        marginRight: '23px',
        float: 'right',
        textTransform: 'uppercase'
    },
    thanks: {
        textTransform: 'uppercase',
        fontSize: '18px',
        color: '#000000',
        fontWeight: 600,
        marginTop: '19px',
    },
    thanksub: {
        fontSize: '12px',
        color: '#000000',
        marginBottom: '-10px',
        marginTop: '19px',

    }
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

export default function ApplicationsList({ vcs, accs, selected, favVC, setFavVC, favACC, setFavACC }: RecommendationsListProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const [rate1, setRate1] = useState<number>(-1);
    const [rate2, setRate2] = useState<number>(-1);
    const [rate3, setRate3] = useState<number>(-1);


    useEffect(()=>{
        setTimeout(
            () => setOpen(true),
            3000
        );
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen(false);
        setOpen1(false);
    };

    const arr = Array.from({ length: 10 }, (x, i) => i);
    return (
        <div className={classes.content}>
            <div className={classes.header}>

                <div className={classes.title}>
                    Ваши заявки
                </div>



                {/* <div className={classes.subtitle}>
                    Подберите необходимые параметры
                </div>
                <div className={classes.sublabel}>
                    Заполните данные для поиска
                </div> */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle className={classes.dialogTitle}>
                        Оцените сервис
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            <div className={classes.blockTitle}>
                                Была ли полезна рекомендательная система?
                            </div>
                            <div className={classes.blocksubTitle}>
                                Оцените от “1” до “10” полезность сервиса
                            </div>
                            <div className={classes.blockChooser}>
                                {arr.map(i =>
                                    <>{i === 9 ?

                                        <div
                                            className={rate1 === i ? classes.blockOptionSelected10 : classes.blockOption10}
                                            onClick={() => setRate1(i)}
                                        >
                                            {i + 1}
                                        </div>
                                        :
                                        <div
                                            className={rate1 === i ? classes.blockOptionSelected : classes.blockOption}
                                            onClick={() => setRate1(i)}
                                        >
                                            {i + 1}
                                        </div>
                                    }</>

                                )}
                                <span className={classes.bad}>
                                    Плохо
                                </span>
                                <span className={classes.good}>
                                    Очень хорошо
                                </span>
                            </div>

                            <div className={classes.blockTitle}>
                                Был ли полезен выбранный Вами сервис?
                            </div>
                            <div className={classes.blocksubTitle}>
                                Оцените от “1” до “10” полезность сервиса
                            </div>
                            <div className={classes.blockChooser}>
                                {arr.map(i =>
                                    <>{i === 9 ?

                                        <div
                                            className={rate2 === i ? classes.blockOptionSelected10 : classes.blockOption10}
                                            onClick={() => setRate2(i)}
                                        >
                                            {i + 1}
                                        </div>
                                        :
                                        <div
                                            className={rate2 === i ? classes.blockOptionSelected : classes.blockOption}
                                            onClick={() => setRate2(i)}
                                        >
                                            {i + 1}
                                        </div>
                                    }</>

                                )}
                                <span className={classes.bad}>
                                    Плохо
                                </span>
                                <span className={classes.good}>
                                    Очень хорошо
                                </span>
                            </div>

                            <div className={classes.blockTitle}>
                                Готовы ли рекомендовать ее другим стартапам?
                            </div>
                            <div className={classes.blocksubTitle}>
                                Оцените от “1” до “10” полезность сервиса
                            </div>
                            <div className={classes.blockChooser}>
                                {arr.map(i =>
                                    <>{i === 9 ?

                                        <div
                                            className={rate3 === i ? classes.blockOptionSelected10 : classes.blockOption10}
                                            onClick={() => setRate3(i)}
                                        >
                                            {i + 1}
                                        </div>
                                        :
                                        <div
                                            className={rate3 === i ? classes.blockOptionSelected : classes.blockOption}
                                            onClick={() => setRate3(i)}
                                        >
                                            {i + 1}
                                        </div>
                                    }</>

                                )}
                                <span className={classes.bad}>
                                    Плохо
                                </span>
                                <span className={classes.good}>
                                    Очень хорошо
                                </span>
                            </div>
                            <Button onClick={handleClose} className={classes.btn}>Оценить</Button>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>


                <Dialog
                    open={open1}
                    onClose={handleClose1}
                >
                    <DialogContent>
                        <DialogContentText >
                            <Check/>
                            <div className={classes.thanks}>
                                Спасибо за оценку сервиса!
                            </div>
                            <div className={classes.thanksub}>
                                Отслеживайте статусы заявки в личном кабинете
                            </div>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose1} className={classes.btn1}>Посмотреть заявки</Button>
                        <Button onClick={handleClose1} className={classes.btn2}>Закрыть</Button>

                    </DialogActions>
                </Dialog>

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
