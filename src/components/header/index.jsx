import React from 'react';
import './header.css'
import {routeRules} from "../../routes/routeRules";
import { NavLink} from "react-router-dom";

const Header = () => {

    const userType = localStorage.getItem('user');

    const menuArray = [
        {id: 'hr', title: 'HR', routes: routeRules.hr, disabled: false },
        {id: 'finance', title: 'Finance', routes: routeRules.finance, disabled: !(userType === "Admin") },
        {id: 'inventory', title: 'Inventory', routes: routeRules.inventory, disabled: true },
        {id: 'settings', title: 'Settings', routes: routeRules.settings, disabled: true },
    ]

    const backward = () => {

    }

    const forward = () => {

    }

    const   handleClick = (e , disabled) => {
        if(disabled) e.preventDefault()
    }

    return (
        <div className='header-wrapper'>
            <div className="navigator left" onClick={backward}>
                {"<<"}
            </div>
            <div className="navigator right" onClick={forward}>
                {">>"}
            </div>
            <div className="top-menu d-flex">
                {
                    menuArray.map((menu) => {
                        return (
                            <NavLink
                                onClick={(e) => handleClick(e, menu.disabled)}
                                to={menu.routes}
                                key={menu.id}
                                activeClassName="selected"
                                className="menu-item"
                            >
                                {menu.title}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default  Header;
