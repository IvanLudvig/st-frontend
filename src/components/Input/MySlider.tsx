import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Slider } from '@material-ui/core';
import { moneyOptions } from '../Step1/data';


const useStyles = makeStyles({
    selectContainer: {
        width: '227px',
        height: '47px',
        marginTop: '23px',
        color: '#fff',
        marginLeft: '8px'
    },
    slider: {
        width: '100%',
        padding: '4px'
    },
    valueLabel: {
        color: '#fff'
    },
    icon: {
        marginTop: '4px'
    },
    selectLabel: {
        width: '100%',
        color: '#A4AFC5',
        fontSize: '12px',
    }
});

interface MySliderProps {
    value: number[];
    setValue: (value: number[]) => void;
}

export default function MySlider({value, setValue}: MySliderProps) {
    const classes = useStyles();

    return (
        <>
            <label className={classes.selectLabel}>Финансирование</label>
            <div className={classes.selectContainer}>
                <Slider
                    className={classes.slider}
                    min={1}
                    max={5}
                    marks={moneyOptions}
                    step={1}
                    value={value}
                    onChange={(event, value) => setValue(value as number[])}
                    classes={{
                        markLabel: classes.valueLabel
                    }}
                />
            </div>
        </>
    )
}
