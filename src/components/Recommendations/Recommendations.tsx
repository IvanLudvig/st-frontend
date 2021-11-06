import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { moneyMap, recommendation_types } from '../Step1/data';
import VCFunds from './VCs/VCFunds';
import VCInfo from './Recommendation/VCInfo/VCInfo';
import Accelerators from './Accelerators/Accelerators';
import { Route, Switch } from 'react-router-dom';
import RecommendationsList from './RecommendationsList';
import ApplicationsList from './Applications/Applications';
import Favourites from './Favourites';
import MakeApplications from './Applications/MakeApplications';
import RiskWarning from './RiskWarning/RiskWarning';
import axios from 'axios';

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

    const [vcs, setVCS] = useState();
    const [acs, setACS] = useState();

    useEffect(() => {
        const params = {
            user_market: market,
            user_stage: stage,
            user_requested_money_min: moneyMap[money[0]],
            user_requested_money_max: moneyMap[money[1]] || moneyMap[moneyMap.length - 1],
            user_required_consultation: checkboxes[0],
            user_required_networking: checkboxes[2],
            user_required_small_scale_production: checkboxes[6],
            user_required_education: checkboxes[1],
            user_required_orders: checkboxes[9],
            user_required_quarters: checkboxes[4],
            user_required_marketing: checkboxes[8],
            user_required_value_proposition: checkboxes[11],
            user_required_testing: checkboxes[5],
            user_required_world: checkboxes[13],
            user_required_legal_accounting: checkboxes[3],
            user_required_scaling: checkboxes[12],
            user_required_prototype_refinement: checkboxes[10]
        };
        let url = new URL('https://startup-recomendation-system.herokuapp.com/vc/');
        //@ts-ignore
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        //@ts-ignore
        //@ts-ignore
        fetch(url.toString(), {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setVCS(data));
    }, []);

    useEffect(() => {
        const params = {
            user_market: market,
            user_stage: stage,
            user_requested_money_min: moneyMap[money[0]],
            user_requested_money_max: moneyMap[money[1]] || moneyMap[moneyMap.length - 1],
            user_required_consultation: checkboxes[0],
            user_required_networking: checkboxes[2],
            user_required_small_scale_production: checkboxes[6],
            user_required_education: checkboxes[1],
            user_required_orders: checkboxes[9],
            user_required_quarters: checkboxes[4],
            user_required_marketing: checkboxes[8],
            user_required_value_proposition: checkboxes[11],
            user_required_testing: checkboxes[5],
            user_required_world: checkboxes[13],
            user_required_legal_accounting: checkboxes[3],
            user_required_scaling: checkboxes[12],
            user_required_prototype_refinement: checkboxes[10]
        };
        let url = new URL('https://startup-recomendation-system.herokuapp.com/acc/');
        //@ts-ignore
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        //@ts-ignore
        //@ts-ignore
        fetch(url.toString(), {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setACS(data));
    }, []);

    const setSelectedType = (type: string) => (value: number[]) => {
        const newSelected = { ...selected };
        //@ts-ignore
        newSelected[type] = value;
        setSelected(newSelected);
    }

    if (!vcs || !acs) {
        return <></>;
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
                    accs={Object.keys(acs as any).filter(id => [...selected['ac'], ...favACC].includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = acs[key] as any;
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
                    accs={acs}
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
                    accs={Object.keys(acs as any).filter(id => favACC.includes(parseInt(id))).reduce((obj: any, key: string) => {
                        //@ts-ignore
                        obj[key] = acs[key] as any;
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
                    type='vc'
                    vcs={vcs}
                    selectedAll={selected['vc']}
                    setSelectedAll={setSelectedType('vc')}
                />
            } />

            <Route exact path="/recommendation-system/result/ac/:id" render={() =>
                <VCInfo
                    type='ac'
                    vcs={acs}
                    selectedAll={selected['ac']}
                    setSelectedAll={setSelectedType('ac')}
                />
            } />


            <Route exact path="/recommendation-system/result" render={() =>
                <RecommendationsList
                    vcs={vcs}
                    accs={acs}
                    selected={selected}
                    favVC={favVC}
                    setFavVC={setFavVC}
                    favACC={favACC}
                    setFavACC={setFavACC}
                />} />
        </Switch>
    )
}
