import React, { useEffect, useState } from 'react';
import { darken, makeStyles } from "@material-ui/core/styles";
import { recommendation_types, recommendation_types_map } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as Stack } from '../../assets/stack.svg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    content: {
        position: 'relative',
        width: '1008px',
        top: '93px',
        marginLeft: '358px',
        display: 'inline-block',
        height: '100%',
        marginBottom: '93px'
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
    optionContainer: {
        display: 'inline-block',
        height: '46px',
        margin: '5px',
        border: '1px solid #7A8CAE',
        borderRadius: '5px',
        color: '#7A8CAE',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'border 0.3s',
        '&:hover': {
            border: '1px solid #FF1F55',
        }
    },
    label: {
        marginLeft: '14px',
        marginRight: '14px',
        lineHeight: '46px'
    },
    selected: {
        border: '1px solid #FF1F55',
        color: '#fff'
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
    }
});

interface RecommendationsListProps {
    vcs: any;
    accs: any;
    selected: boolean[];
    setSelected: (value: boolean[]) => void;
    favVC: number[];
    setFavVC: (value: number[]) => void;
    favACC: number[];
    setFavACC: (value: number[]) => void;
}

export default function RecommendationsList({ vcs, accs, selected, setSelected, favVC, setFavVC, favACC, setFavACC }: RecommendationsListProps) {
    const classes = useStyles();
    const [selectedType, setSelectedType] = useState(recommendation_types[0]);
    const [showVC, setShowVC] = useState(-1);

    const setSelectedVC = (id: number) => (value: boolean) => {
        const newselectedAll = [...selected];
        newselectedAll[id] = value;
        setSelected(newselectedAll);
    }


    if (showVC !== -1) {
        //@ts-ignore
        return <VCInfo vc={vcs[(showVC + '')] as any} selected={selected[showVC]} setSelected={setSelectedVC(showVC)} setShowVC={setShowVC} />
    }
    return (
        <div className={classes.content}>
            <div className={classes.header}>

                <div className={classes.title}>
                    Подбор сервисов по вашему запросу
                </div>
                <hr className={classes.line1} />

                <div className={classes.options}>
                    {recommendation_types.map(option =>
                        <div
                            className={selectedType === option ? `${classes.optionContainer} ${classes.selected}` : classes.optionContainer}
                            onClick={() => {
                                setSelectedType(option)
                                //@ts-ignore
                                if (recommendation_types_map[option]) {
                                    //@ts-ignore
                                    document.getElementById(recommendation_types_map[option])?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <span className={classes.label}>
                                {option}
                            </span>
                        </div>
                    )}
                </div>



                {/* <div className={classes.subtitle}>
                    Подберите необходимые параметры
                </div>
                <div className={classes.sublabel}>
                    Заполните данные для поиска
                </div> */}


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
            <VCFunds vcs={vcs} selected={selected} setSelected={setSelectedVC} setShowVC={setShowVC} favList={favVC} setFav={setFavVC} />
            <Accelerators vcs={accs} selected={selected} setSelected={setSelectedVC} setShowVC={setShowVC} favList={favACC} setFav={setFavACC} />
        </div>

    )
}
