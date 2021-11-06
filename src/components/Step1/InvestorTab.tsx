import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { investorTypes } from './data';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles({
    root: {
        marginLeft: '30px',
        borderRadius: '5px',
        width: '948px',
        height: '50px',
        marginTop: '19px'
    },
    toggleButton: {
        width: '237px',
        height: '50px',
        margin: '2px',
        outlineColor: '#4A5874',
        outlineWidth: '1px',
        outlineStyle: 'solid',
        marginRight: '1px'
    },
    selectedBtn: {
        outlineColor: '#FF1F55',
    },
    label: {
        textTransform: 'none',
        color: '#848FA6',
        fontSize: '14px',
        marginLeft: '16px'
    },
    selectedLabel: {
        color: '#fff'
    },
    title: {
        color: '#A4AFC5',
        fontSize: '12px'
    },
    group: {
        marginTop: '10px'
    }
});

export default function InvestorTab() {
    const classes = useStyles();

    const [value, setValue] = useState('Частный фонд');
    const isSelected = (label: string) => value === label;

    return (
        <div className={classes.root} >
            <div className={classes.title}>
                Тип инвестора
            </div>
            <ToggleButtonGroup
                className={classes.group}
                value={value}
                exclusive
                onChange={(event, value) => setValue(value)}
            >
                {investorTypes.map(investorType =>
                    <ToggleButton
                        value={investorType.label}
                        className={isSelected(investorType.label) ? `${classes.toggleButton} ${classes.selectedBtn}` : classes.toggleButton}
                    >
                        {isSelected(investorType.label) ?
                            investorType.selectedIcon
                            : investorType.icon
                        }
                        <span className={isSelected(investorType.label) ? `${classes.label} ${classes.selectedLabel}` : classes.label}>
                            {investorType.label}
                        </span>
                    </ToggleButton>
                )}

            </ToggleButtonGroup>
        </div>
    )
}
