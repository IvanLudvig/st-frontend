import React from 'react';
import { darken, makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import TopBar from './TopBar';
import Zerno from '../../../../assets/zerno.jpg';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const useStyles = makeStyles({
    container: {
        top: '93px',
        left: '358px',
        display: 'inline-block',
        position: 'relative',
        background: '#F2F3F6',
        width: '1008px',
        marginBottom: '80px'
    },
    content: {
        width: '666px',
        display: 'inline-block',
        // marginLeft: '268px',
        marginRight: '34px'
    },
    titleBar: {
        marginTop: '34px',
        width: '706px',
        height: '45px'
    },
    label: {
        textTransform: 'uppercase',
        color: '#6D798F',
        fontSize: '12px',
        width: '150px',
        marginBottom: '4px',
        marginTop: '34px'
    },
    title: {
        color: '#000000',
        fontSize: '24px',
        fontWeight: 500
    },
    aboutSection: {
        marginTop: '23px',
        width: '605px'
    },
    about: {
        marginTop: '6px',
        color: '#000000',
        fontSize: '12px'
    },
    statsSection: {
        marginTop: '30px',
        display: 'inline-block'
    },
    stat: {
        display: 'inline-block',
        marginRight: '46px'
    },
    statLabel: {
        marginTop: '7px',
        // marginLeft: '12px',
        marginRight: '12px',
        color: '#7D8DAB',
        textTransform: 'uppercase',
        fontSize: '9px'
    },
    statNumber: {
        // marginLeft: '12px',
        marginRight: '12px',
        marginBottom: '7px',
        color: '#000000',
        fontSize: '12px'
    },
    actions: {
        marginTop: '45px',
        height: '39px'
    },
    btn: {
        display: 'inline-block',
        // width: '115px',
        height: '39px',
        marginRight: '15px',
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
    helpertext: {
        marginTop: '14px',
        fontSize: '12px',
        color: '#6D798F',
        width: '372px',
        height: '32px'
    },
    iconContainer: {
        display: 'inline-block',
        width: '185px',
        height: '500px',
        marginTop: '34px',
        marginLeft: '33px',
        float: 'left',
        marginRight: '50px'
    },
    icon: {
        width: '185px',
        height: '185px'
    },
    options: {
        display: 'inline-block',
        margin: '0 25px 0 0',
    },
    optionContainer: {
        display: 'inline-block',
        background: '#fff',
        height: '39px',
        margin: '5px',
        borderRadius: '55px',
        color: '#0458FE',
        fontSize: '13px',
        fontWeight: 500,
    },
    optionLabel: {
        marginLeft: '10px',
        marginRight: '10px',
        lineHeight: '39px',
    },
    map: {
        width: '1008px',
        height: '300px',
        marginTop: '60px'
    }
});

interface VCInfoProps {
    vcs: any;
    selectedAll: number[];
    setSelectedAll: (value: number[]) => void;
}

export default function VCInfo({ vcs, selectedAll, setSelectedAll }: VCInfoProps) {
    const classes = useStyles();

    
    // const { id } = useParams().match.params;
    // console.log(id);
    const split = window.location.href.split('/');
    const id = parseInt(split[split.length - 1]);
    // console.log(split);
    // console.log(id);

    const selected = selectedAll.includes(id);
    const setSelected = () => {
        if (selectedAll.includes(id)) {
            setSelectedAll(selectedAll.filter(f => f !== id));
        } else {
            setSelectedAll([...selectedAll, id]);
        }
    }

    const vc = vcs[id];
    const fields = ['РАУНДЫ ИНВЕСТИРОВАНИЯ', 'тип', 'Количество инвестиций', 'Exit', 'Год основания'];
    const values = [vc['Раунд инвестирования'], `${vc['Тип по источнику возник-ния']}, ${vc['Форма собственности']}`,
    vc['Количество инвестиций'], vc['Количество выходов'], vc['Год основания']
    ];

    const contact_fields = ['Сайт', 'Ближайшая станция метро', 'Адрес'];
    const contact_values = [vc['Сайт'], vc['Ближайшая станция метро'], vc['Адрем']];

    return (
        <div className={classes.container}>
            <TopBar title='Zerno ventures' />
            <div className={classes.iconContainer}>
                <img className={classes.icon} />
            </div>

            <div className={classes.content}>
                <div className={classes.titleBar}>

                    <div className={classes.label}>
                        Венчурный фонд
                    </div>
                    <div className={classes.title}>
                        {vc['Название объекта']}
                    </div>
                </div>
                <div className={classes.aboutSection}>
                    <div className={classes.label}>
                        О фонде
                    </div>
                    <div className={classes.about}>
                        {vc['Описание']}
                    </div>
                </div>
                <div className={classes.statsSection}>
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
                    <Button className={classes.btn} variant='contained' onClick={() => setSelected()}>
                        {selected ? 'Добавлено к заявке' : '+Добавить  к заявке'}
                    </Button>
                    {/* <Button className={classes.btn} variant='contained' onClick={() => setSelected(!selected)}>
                        Получить услугу
                    </Button> */}
                </div>
                <div className={classes.helpertext}>
                    Добавляйте компании к “Заявке” чтобы выслать предложение сразу всем интересующим вас компаниям
                </div>

                <div className={classes.label}>
                    Направления
                </div>
                <div className={classes.options}>
                    {vc['Рынок'].split('|').map((option: string) =>
                        <div
                            className={classes.optionContainer}
                        >
                            <span className={classes.optionLabel}>
                                {option}
                            </span>
                        </div>
                    )}
                </div>


                <div className={classes.label}>
                    Контакты
                </div>
                {contact_fields.map((field: string, i: number) =>
                    <>
                        {contact_values[i] &&
                            <div className={classes.stat}>
                                <div className={classes.statLabel}>
                                    {field}
                                </div>
                                <div className={classes.statNumber}>
                                    {field === 'Сайт' ?
                                        <a href={contact_values[i]}>
                                            {contact_values[i]}
                                        </a>
                                        :
                                        <>
                                            {contact_values[i]}
                                        </>
                                    }
                                </div>
                            </div>}
                    </>
                )}

            </div>

            {vc['Широта'] && vc['Долгота'] &&
                <YMaps>
                    <YMap className={classes.map} defaultState={{ center: [vc['Широта'], vc['Долгота']], zoom: 13 }} >
                        <Placemark geometry={[vc['Широта'], vc['Долгота']]} />
                    </YMap>
                </YMaps>
            }
        </div >
    )
}
