import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { recommendation_types, vcs } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators';


const useStyles = makeStyles({
    content: {
        position: 'relative',
        width: '1008px',
        top: '93px',
        marginLeft: '358px',
        display: 'inline-block',
        height: '100%',
        marginBottom: '100px'
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
    }
});

interface VCFundsProps {
    selected: boolean[];
    setSelected: (value: boolean[]) => void;
}

export default function Recommendations({ selected, setSelected }: VCFundsProps) {
    const classes = useStyles();
    const [selectedType, setSelectedType] = useState(recommendation_types[0]);
    const [showVC, setShowVC] = useState(-1);

    const setSelectedVC = (id: number) => (value: boolean) => {
        const newselectedAll = [...selected];
        newselectedAll[id] = value;
        setSelected(newselectedAll);
    }


    if (showVC !== -1){
        //@ts-ignore
        return <VCInfo vc={vcs[(showVC+'')] as any} selected={selected[showVC]} setSelected={setSelectedVC(showVC)} setShowVC={setShowVC} />
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
                            onClick={() => setSelectedType(option)}
                        >
                            <span className={classes.label}>
                                {option}
                            </span>
                        </div>
                    )}
                </div>

                <VCFunds vcs={vcs} selected={selected} setSelected={setSelectedVC} setShowVC={setShowVC} />

                <Accelerators vcs={vcs} selected={selected} setSelected={setSelectedVC} setShowVC={setShowVC} />

            </div>
        </div>

    )
}
