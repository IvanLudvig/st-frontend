import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { recommendation_types, vcs } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators';
import { Route, Switch } from 'react-router-dom';
import RecommendationsList from './RecommendationsList';
import ApplicationsList from './Applications';
import Favourites from './Favourites';


export default function Recommendations() {

    const [selected, setSelected] = useState([false, false]);
    const [favVC, setFavVC] = useState([] as number[]);
    const [favACC, setFavACC] = useState([] as number[]);

    return (
        <Switch>
            <Route path="/recommendation-system/result/applications" render={() =>
                <ApplicationsList
                    vcs={vcs}
                    accs={vcs}
                    selected={selected}
                    setSelected={setSelected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />
            }
            />
            <Route exact path="/recommendation-system/result/favorites" render={() =>
                <Favourites
                    vcs={Object.keys(vcs).filter(id => favVC.includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    accs={Object.keys(vcs).filter(id => favACC.includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    selected={selected}
                    setSelected={setSelected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />
            } />
            <Route exact path="/recommendation-system/result" render={() =>
                <RecommendationsList
                    vcs={vcs}
                    accs={vcs}
                    selected={selected}
                    setSelected={setSelected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />} />
        </Switch>
    )
}
