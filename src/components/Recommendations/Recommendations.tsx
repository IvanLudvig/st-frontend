import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { recommendation_types, vcs } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators/Accelerators';
import { Route, Switch } from 'react-router-dom';
import RecommendationsList from './RecommendationsList';
import ApplicationsList from './Applications/Applications';
import Favourites from './Favourites';
import MakeApplications from './Applications/MakeApplications';
import RiskWarning from './RiskWarning/RiskWarning';


interface RecommendationsProps {
    checkboxes: boolean[];
    setCheckboxes: (value: boolean[]) => void;
    market: string;
    setMarket: (value: string) => void;
    stage: string;
    setStage: (value: string) => void;
    tech: string[];
    setTech: (value: string[]) => void;
    money: number[];
    setMoney: (value: number[]) => void;
}

export default function Recommendations({ checkboxes, setCheckboxes, market, setMarket, stage, setStage, tech, setTech, money, setMoney }: RecommendationsProps) {

    const [selected, setSelected] = useState({ 'vc': [] as number[], 'ac': [] as number[] });
    const [favVC, setFavVC] = useState([] as number[]);
    const [favACC, setFavACC] = useState([] as number[]);

    const setSelectedType = (type: string) => (value: number[]) => {
        const newSelected = { ...selected };
        //@ts-ignore
        newSelected[type] = value;
        setSelected(newSelected);
    }

    return (
        <Switch>
            <Route path="/recommendation-system/result/applications" render={() =>
                <ApplicationsList
                    vcs={Object.keys(vcs).filter(id => selected['vc'].includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    accs={Object.keys(vcs).filter(id => selected['ac'].includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    selected={selected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />
            }
            />
            <Route path="/recommendation-system/result/make-applications" render={() =>
                <MakeApplications
                    vcs={Object.keys(vcs).filter(id => [...selected['vc'], ...favVC].includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    accs={Object.keys(vcs).filter(id => [...selected['ac'], ...favACC].includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = vcs[key] as any;
                        return obj;
                    }, {})}
                    selected={selected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                    setSelectedType={setSelectedType}
                    setSelected={setSelected}
                />
            }
            />

            <Route exact path="/recommendation-system/result/risk-warning" render={() =>
                <RiskWarning
                    vcs={vcs}
                    accs={vcs}
                    selected={selected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />} />

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
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />
            } />


            <Route exact path="/recommendation-system/result/vc/:id" render={() =>
                <VCInfo
                    vcs={vcs}
                    selectedAll={selected['vc']}
                    setSelectedAll={setSelectedType('vc')}
                />
            } />

            <Route exact path="/recommendation-system/result/ac/:id" render={() =>
                <VCInfo
                    vcs={vcs}
                    selectedAll={selected['ac']}
                    setSelectedAll={setSelectedType('ac')}
                />
            } />


            <Route exact path="/recommendation-system/result" render={() =>
                <RecommendationsList
                    vcs={vcs}
                    accs={vcs}
                    selected={selected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />} />
        </Switch>
    )
}
