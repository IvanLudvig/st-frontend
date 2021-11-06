import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MyCheckbox from './MyCheckbox';


const useStyles = makeStyles({
    root: {
        width: '227px',
        marginRight: '11px',
        marginTop: '10px'
    },
    container: {
        border: '1px solid #4A5874',
        borderRadius: '5px',
        width: '227px',
        height: '47px',
        cursor: 'pointer'
    },
    checkbox: {
        marginTop: '5px',
        height: '47px'
    },
    labeldiv: {
        display: 'flex',
        position: 'absolute',
        width: '181px',
        height: '47px',
        marginLeft: '42px',
        marginTop: '-54px',
        alignItems: 'center'
    },
    label: {
        color: '#A4AFC5',
        fontSize: '12px',
    }
});

interface CheckboxContainerProps {
    label: string;
    selected: boolean;
    onChange: (value: boolean) => void;
}

export default function CheckboxContainer({ label, selected, onChange }: CheckboxContainerProps) {
    const classes = useStyles();

    const handleChange = (event: any) => {
        onChange(!selected);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container} onClick={handleChange}>
                <div className={classes.checkbox}>
                    <MyCheckbox selected={selected} onChange={handleChange} />
                </div>
                <div className={classes.labeldiv}>
                    <div className={classes.label}>
                        {label}
                    </div>
                </div>
            </div>
        </div>
    )
}
