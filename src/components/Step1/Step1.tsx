import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MySelect from '../Input/MySelect';
import CheckboxContainer from '../Input/CheckboxContainer';
import { marketOptions, moneyOptions, stageOptions, stageRows, technologies } from './data';
import FilterTab from './FilterTab';
import InvestorTab from './InvestorTab';
import { Button, Checkbox } from '@material-ui/core';
import MyCheckbox from '../Input/MyCheckbox';
import MySlider from '../Input/MySlider';
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/menu.svg';


const useStyles = makeStyles({
    content: {
        position: 'absolute',
        background: '#24314A',
        width: '1008px',
        top: '93px',
        bottom: 0,
        left: '358px',
        height: '100%',
        paddingBottom: '200px'
    },
    title: {
        position: 'relative',
        color: '#fff',
        left: '33px',
        top: '21px',
        fontWeight: 'bold',
        fontSize: '22px'
    },
    line1: {
        width: '934px',
        marginLeft: '33px',
        marginTop: '40px',
        border: '1px dashed #435371'
    },
    line2: {
        width: '934px',
        marginLeft: '33px',
        marginTop: '20px',
        border: '1px dashed #435371'
    },
    button: {
        backgroundColor: '#FF1F55',
        color: '#fff',
        height: '40px',
        width: '120px',
        lineHeight: '40px',
        float: 'right'
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
    selectContainer: {
        marginLeft: '33px',
        marginTop: '16px'
    },
    select: {
        display: 'inline-block',
        marginRight: '10px'
    },
    checkboxArrays: {
        marginLeft: '33px',
        marginTop: '15px',
        height: '279px'
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
    },
    line3: {
        position: 'relative',
        width: '934px',
        marginLeft: '33px',
        border: '1px dashed #435371'
    },
    filters: {
        position: 'static',
        marginLeft: '30px',
        background: '#293854',
        borderRadius: '5px',
        width: '948px',
        height: '71px',
        marginTop: '19px',
        verticalAlign: 'middle',
    },
    getService: {
        position: 'fixed',
        background: '#24314A',
        left: '357px',
        height: '78px',
        width: '1006px',
        bottom: 0,
        border: '1px solid #344057',
    },
    submitBtn: {
        position: 'absolute',
        width: '173px',
        height: '40px',
        right: '35px',
        top: '17px',
        color: '#fff',
        background: '#0458FE',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '14px',
        '&:hover': {
            background: '#0458FE',
        }
    },
    onlyStartups: {
        position: 'absolute',
        bottom: '24px',
        lineHeight: '15px',
        left: '31px',
        color: '#7E899D',
        textTransform: 'uppercase',
        fontSize: '14px',
        cursor: 'pointer'
    },
    checkbox: {
        width: '15px',
        height: '15px',
        color: '#4A5874',
        '&$checked': {
            color: '#FF1F55',
            backgroundColor: '#24314A'
        }
    },
    sidebarContainer: {
        position: 'absolute',
        height: '1300px',
        width: '358px',
        top: 0,
        background: '#24314A',
        backgroundColor: '#24314A',
    },
    sidebar: {
        width: '358px'
    },
});


export default function Step1() {
    const classes = useStyles();

    const [checkboxes, setCheckboxes] = useState<boolean[]>(Array(stageRows.flat().length).fill(false));
    const [market, setMarket] = useState<string>('');
    const [stage, setStage] = useState<string>('');
    const [tech, setTech] = useState<string[]>([]);
    const [onlyStartups, setOnlyStartups] = useState(false);
    const [money, setMoney] = useState([1, moneyOptions.length]);

    const onCheckboxChange = (i: number) => (value: boolean) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[i] = value;
        setCheckboxes(newCheckboxes);
    }

    return (
        <>
            <div className={classes.sidebarContainer}>
                <Menu className={classes.sidebar} />
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    Рекомендательные системы для стартапов
                </div>
                <hr className={classes.line1} />

                <div className={classes.subtitle}>
                    Подберите необходимые параметры
                </div>
                <div className={classes.sublabel}>
                    Заполните данные для поиска
                </div>

                <div className={classes.selectContainer}>
                    <div className={classes.select}>
                        <MySelect
                            label='Стадия'
                            options={stageOptions}
                            value={stage}
                            setValue={setStage}
                        />
                    </div>
                    <div className={classes.select}>
                        <MySelect
                            label='Рынок'
                            options={marketOptions}
                            value={market}
                            setValue={setMarket}
                        />
                    </div>
                    <div className={classes.select}>
                        <MySelect
                            label='Технологии'
                            options={technologies}
                            multiple
                            value={tech}
                            setValue={setTech}
                        />
                    </div>
                    <div className={classes.select}>
                        <MySlider value={money} setValue={setMoney} />
                    </div>

                </div>

                <hr className={classes.line2} />

                <div className={classes.checkboxArrays}>
                    {stageRows.map((row: string[], i: number) =>
                        <div className={classes.checkboxArray}>
                            <div className={classes.stageLabel}>
                                {stageOptions[i]}
                            </div>
                            {row.map((label: string, j: number) =>
                                <CheckboxContainer key={`checkbox-${label}`} label={label} selected={checkboxes[i * 4 + j]} onChange={onCheckboxChange(i * 4 + j)} />
                            )}
                        </div>
                    )}
                </div>

                <div className={classes.line3} />

                <FilterTab />
                <div className={classes.line3} />
                <InvestorTab />

            </div>
            <div className={classes.getService}>
                {/* <span className={classes.onlyStartups} onClick={() => setOnlyStartups(!onlyStartups)}>
                    <Checkbox className={classes.checkbox} checked={onlyStartups}  />
                    Только стартапы
                </span> */}
                <Button className={classes.submitBtn} variant='contained' component={Link} to="/recommendation-system/result">
                    Получить сервис
                </Button>
            </div>
        </>


    )
}
