import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {routeRules} from "./routes/routeRules";
import {routesData} from "./routes/routesData";
import AppRoute from "./layoutRoute/AppRoute";
import DefaultRoute from "./layoutRoute/DefaultRoute";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={routeRules.login}/>
                    </Route>
                    <Route exact path='/rajyug'>
                        <Redirect to={routeRules.login}/>
                    </Route>
                    {
                        routesData.map(route => {
                            if (route.auth){
                                return <AppRoute {...route}/>
                            } else {
                                return <DefaultRoute {...route}/>
                            }
                        })
                    }
                </Switch>
            </Router>
        </>
    );
}

export default App;
