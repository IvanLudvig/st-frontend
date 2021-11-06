import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select, Checkbox } from '@material-ui/core';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';


const useStyles = makeStyles({
    selectContainer: {
        width: '227px',
        height: '47px',
        marginTop: '10px'
    },
    select: {
        height: '47px',
        color: '#fff',
        width: '100%',
        border: '1px solid #4A5874',
        borderRadius: '5px',
        background: '#24314A',
        fontSize: '13px',
        padding: '4px'
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

interface Step1Props {
    label: string;
    options: any[];
    multiple?: boolean;
    value: any;
    setValue: (value: any) => void;
}

export default function MySelect({ label, options, value, setValue, multiple }: Step1Props) {
    const classes = useStyles();

    const handleChange = (event: any) => {
        const {
            target: { value },
        } = event;
        setValue(value);
    };

    return (
        <>
            <label className={classes.selectLabel}>{label}</label>
            <div className={classes.selectContainer}>
                <Select
                    variant='outlined'
                    color='secondary'
                    className={classes.select}
                    multiple={multiple}
                    displayEmpty
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                        },
                        getContentAnchorEl: null,
                    }}
                    value={value}
                    onChange={handleChange}
                    IconComponent={ArrowIcon}
                    renderValue={multiple ? value => (value as any).join(", ") : undefined}
                    inputProps={{
                        classes: {
                            icon: classes.icon
                        }
                    }}
                >
                    {options.map((option: any) =>
                        <MenuItem key={option} value={option}>
                            {multiple &&
                                <Checkbox checked={value.includes(option)} />
                            }
                            {option}
                        </MenuItem>
                    )}
                </Select>
            </div>
        </>
    )
}
