import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from '@material-ui/core';


const useStyles = makeStyles({
    checkbox: {
        width: '19px',
        height: '19px',
        color: '#4A5874',
        '&$checked': {
            color: '#FF1F55',
            backgroundColor: '#24314A'
        }
    }
});

interface MyCheckBoxProps {
    selected: boolean;
    onChange: (value: boolean) => void;
}

export default function MyCheckbox({ selected, onChange }: MyCheckBoxProps) {
    const classes = useStyles();

    const handleChange = (event: any) => {
        onChange(event.target.checked);
    };

    return (
        <Checkbox
            className={classes.checkbox}
            checked={selected}
            onChange={handleChange}
        />
    )
}
