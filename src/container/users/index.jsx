import React, {useState} from 'react';
import { useLocation} from "react-router";
import { Helmet } from 'react-helmet'
import './users.css';
import ActionCard from "../../components/actionCard";
import {routeRules} from "../../routes/routeRules";

const Users = () => {

    let location = useLocation();

    const [useType, setUserType] = useState("")

    useState(() => {
        if (location.pathname === routeRules.hr){
            setUserType("HR")
        } else if (location.pathname === routeRules.inventory){
            setUserType("Inventory")
        } else if (location.pathname === routeRules.finance){
            setUserType("Finance")
        } else if (location.pathname === routeRules.settings){
            setUserType("Settings")
        }
    }, [])

    return (
        <div className="page-wrapper">
            <Helmet title={`Rajyug | ${useType}`} />

            <div className="container">
                <div className='d-flex pt-4'>
                    <ActionCard icon={"fas fa-users"} title={`${useType} Master`}/>
                    <ActionCard icon={"far fa-calendar-alt"} title={`${useType} Transaction`}/>
                    <ActionCard icon={"far fa-edit"} title={`${useType} Dashboard`}/>
                </div>
            </div>
        </div>
    );
};

export default Users;