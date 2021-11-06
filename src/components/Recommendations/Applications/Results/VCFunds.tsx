import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Recommendation from './Recommendation/Recommendation';


const useStyles = makeStyles({
    container: {
        position: 'static',
        background: '#fff',
        width: '1008px',
        paddingTop: '28px',
        paddingBottom: '28px'
        // top: '93px',
        // left: '358px'
    },
    heading: {
        // position: 'relative',
        color: '#000000',
        marginLeft: '30px',
        fontWeight: 500,
        fontSize: '20px',
        marginBottom: '25px'
    }
});


interface VCFundsProps {
    vcs: any;
    selected: number[];
    favList: number[];
    setSelected: (value: number[]) => void;
}

export default function VCFunds({ vcs, selected, favList, setSelected }: VCFundsProps) {
    const classes = useStyles();

    const toggleSel = (id: number) => () => {
        if (selected.includes(id)) {
            setSelected([...selected.filter(f => f !== id)]);
        } else {
            setSelected([...selected, id]);
        }
    }

    return (
        <div id='vcs' className={classes.container}>
            {/* <hr className={classes.line1} /> */}
            <div className={classes.heading}>
                Венчурные фонды
            </div>
            {Object.keys(vcs).map((id) =>
                <Recommendation vc={vcs[id]} type='vc' id={parseInt(id)} selected={selected.includes(parseInt(id))} fav={favList.includes(parseInt(id))} setSelected={toggleSel(parseInt(id))} />
            )}


        </div >
    )
}
