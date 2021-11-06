import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Recommendation from '../Recommendation/Recommendation';


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
    selected: boolean[];
    setSelected: (id: number) => (value: boolean) => void;
    setShowVC: (id: number) => void;
}

export default function VCFunds({ vcs, selected, setSelected, setShowVC }: VCFundsProps) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <hr className={classes.line1} /> */}
            <div className={classes.heading}>
                Венчурные фонды
            </div>
            {Object.values(vcs).map((vc, id) =>
                <Recommendation vc={vc} id={id} selected={selected[id]} setShowVC={setShowVC} />
            )}

        </div >
    )
}
