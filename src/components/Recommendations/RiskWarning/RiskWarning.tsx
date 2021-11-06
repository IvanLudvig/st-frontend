import React, { useEffect, useState } from 'react';
import { darken, makeStyles } from "@material-ui/core/styles";
import { recommendation_types, recommendation_types_map } from '../../Step1/data';
import VCFunds from '../VCs/VCFunds';
import VCInfo from '../Recommendation/VCInfo/VCInfo';
import Accelerators from '../Accelerators/Accelerators';
import { ReactComponent as Warning } from '../../../assets/icons/warning.svg';
import { Link } from 'react-router-dom';
import CheckboxContainer from '../../Input/CheckboxContainer';
import { Button } from '@material-ui/core';


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
        // paddingBotom: '200px'
    },
    header: {
        background: '#24314A',
        width: '1008px'
    },
    title: {
        position: 'relative',
        color: '#fff',
        left: '30px',
        top: '25px',
        fontWeight: 'bold',
        fontSize: '30px'
    },
    line1: {
        width: '934px',
        marginLeft: '30px',
        marginTop: '40px',
        border: '1px dashed #435371'
    },
    options: {
        display: 'inline-block',
        margin: '0 25px 24px 24px',
    },
    subtitle: {
        marginTop: '20px',
        marginLeft: '33px',
        color: '#fff',
        fontSize: '14px',
        textTransform: 'uppercase'
    },
    sublabel: {
        marginTop: '4px',
        marginLeft: '33px',
        color: '#fff',
        fontSize: '12px',
        opacity: 0.5
    },
    checkboxes: {
        display: 'inline-block',
        marginLeft: '30px',
    },
    checkbox: {
        display: 'inline-block',
        marginRight: '5px'
    },
    checkboxes1: {
        display: 'inline-block',
        marginLeft: '30px',
        marginBottom: '32px'
    },
    warningbox: {
        margin: '21px 34px 21px 31px',
        border: '1px solid #F2F3F6',
        width: '910px',
        // height: '610px',
        padding: '19px 38px 36px 19px'
    },
    warningTitle: {
        color: '#000000',
        fontSize: '20px',
        fontWeight: 500
    },
    btn: {
        position: 'absolute',
        top: '676px',
        right: '0px',
        float: 'right',
        width: '210px',
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

export default function RiskWarning({ vcs, accs, selected, favVC, setFavVC, favACC, setFavACC }: RecommendationsListProps) {
    const classes = useStyles();
    const [selectedType, setSelectedType] = useState(recommendation_types[0]);
    const [showVC, setShowVC] = useState(-1);

    const [strategy, setStrategy] = useState('Оптималный риск');
    const [goal, setGoal] = useState('');

    const risks = ['Консервативный', 'Оптималный риск', 'Риск умеренный', 'Высокий риск'];
    const goals = ['Заработать деньги', 'Увеличить капитализацию', 'Продать компанию', 'Создать инновации',
        'Решить социальные проблемы', 'Выйти на IPO', 'Решить проблемы Москвы', 'Экспорт',
        'Серийный предприниматель', 'Создать международную компанию'
    ];

    return (
        <div className={classes.content}>
            <div className={classes.header}>

                <div className={classes.title}>
                    Рекомендация на основании успешных проектов
                </div>
                <hr className={classes.line1} />

                <div className={classes.subtitle}>
                    Выбор стратегии
                </div>
                <div className={classes.sublabel}>
                    Выберите стратегию
                </div>

                <div className={classes.checkboxes}>
                    {risks.map(label =>
                        <div className={classes.checkbox}>
                            <CheckboxContainer label={label} selected={label === strategy} onChange={() => setStrategy(label)} />
                        </div>
                    )}
                </div>
                <hr className={classes.line1} />

                <div className={classes.subtitle}>
                    Цель стартапа
                </div>
                <div className={classes.sublabel}>
                    Выберите цель
                </div>

                <div className={classes.checkboxes1}>
                    {goals.map(label =>
                        <div className={classes.checkbox}>
                            <CheckboxContainer label={label} selected={label === goal} onChange={() => setGoal(label)} />
                        </div>
                    )}
                </div>

            </div>

            <div className={classes.warningbox}>
                <div className={classes.warningTitle}>
                    Рекомендация
                </div>
                <span style={{ color: '#7A859C', fontSize: '12px' }}>
                    Вывод: &nbsp;
                </span>
                <span style={{ color: '#000000', fontSize: '12px', fontWeight: 500 }}>
                    Риск умеренный
                </span>
                <div style={{ fontSize: '12px', color: '#101010' }}>
                    Более 50% стартапов выбирают венчурные фонды у которых есть собственный акселератор
                </div>
                <hr style={{ width: '899px', marginTop: '18px', marginBottom: '18px', border: '1px dashed #E3E6ED', marginLeft: '0px' }} />
                <div>
                    <div style={{ display: 'inline-block', marginTop: '3px' }}>
                        <Warning />
                    </div>
                    <div style={{ display: 'inline-block', color: '#000000', fontSize: '12px', fontWeight: 500, marginLeft: '4px' }}>
                        Обратите внимание!
                    </div>
                    <div style={{ fontSize: '12px', color: '#101010' }}>
                        Стадия вашего стартапа не совпадают с выбранными сервисами и запрашиваемыми инвестициями
                    </div>
                    <Button className={classes.btn} variant='contained' component={Link} to={`/recommendation-system/result/make-applications`}>
                        Все равно продолжить
                    </Button>
                </div>
            </div>

        </div>

    )
}
