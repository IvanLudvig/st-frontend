import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Switch } from '@material-ui/core';
import CheckboxContainer from '../Input/CheckboxContainer';
import { engRows } from './data';


const useStyles = makeStyles({
    subtitle: {
        position: 'relative',
        color: '#fff',
        marginLeft: '18px',
        paddingTop: '12px',
        fontSize: '16px'
    },
    sublabel: {
        marginTop: '4px',
        color: '#fff',
        fontSize: '12px',
        marginLeft: '18px',
        paddingBottom: '18px',
        opacity: 0.5
    },
    filters: {
        marginBottom: '20px',
        marginLeft: '30px',
        background: '#293854',
        borderRadius: '5px',
        width: '948px',
        height: '71px',
        marginTop: '19px'
    },
    labels: {
        float: 'left'
    },
    switch: {
        float: 'right',
        padding: '18px'
    },
    addfilters: {
        position: 'static',
        marginBottom: '20px',
        marginLeft: '30px',
        border: '1px solid #3C4964',
        borderRadius: '5px',
        width: '948px',
        height: '71px',
        marginTop: '19px'
    },
    checkboxArrays: {
        marginLeft: '33px',
        marginTop: '15px',
        height: '230px'
    },
    checkboxArray: {
        position: 'relative',
        marginRight: '10px',
        width: '227px',
        display: 'inline-block',
        verticalAlign: 'top',
    },
    stageLabel: {
        color: '#A4AFC5',
        fontSize: '12px',
        marginBotton: '10px'
    }
});


export default function FilterTab() {
    const classes = useStyles();

    const [show, setShow] = useState(false);
    const [showEng, setShowEng] = useState(false);

    const labels = ['Инжиниринговый центр', ' ', ' ', ' '];

    const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(engRows.flat().length).fill(false));
    const onCheckboxChange = (i: number) => (value: boolean) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[i] = value;
        setCheckboxes(newCheckboxes);
    }

    return (
        <>
            <div className={classes.filters} >
                <div className={classes.labels}>
                    <div className={classes.subtitle}>
                        Дополнительные фильтры
                    </div>
                    <div className={classes.sublabel}>
                        Включите если хотите персонализировать сервис
                    </div>
                </div>
                <div className={classes.switch}>
                    <Switch checked={show} onChange={(event: any) => setShow(event.target.checked)} />
                </div>
            </div>

            {show &&
                <div className={classes.addfilters} >
                    <div className={classes.labels}>
                        <div className={classes.subtitle}>
                            Инжиниринговый центр
                        </div>
                        <div className={classes.sublabel}>
                            Заполните данные для поиска
                        </div>
                    </div>
                    <div className={classes.switch}>
                        <Switch checked={showEng} onChange={(event: any) => setShowEng(event.target.checked)} />
                    </div>
                </div>
            }
            {show && showEng &&
                <div className={classes.checkboxArrays}>
                    {engRows.map((row: string[], i: number) =>
                        <div className={classes.checkboxArray}>
                            <div className={classes.stageLabel}>
                                {labels[i]}&nbsp;
                            </div>
                            {row.map((label: string, j: number) =>
                                <CheckboxContainer key={`checkbox-${label}-1`} label={label} selected={checkboxes[i * 3 + j]} onChange={onCheckboxChange(i * 3 + j)} />
                            )}
                        </div>
                    )}
                </div>
            }
        </>
    )
}
