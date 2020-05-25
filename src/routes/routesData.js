import {routeRules} from "./routeRules";
import Login from "../container/login";
import Users from "../container/users";

export const routesData = [
    {
        key: routeRules.login,
        path: routeRules.login,
        component: Login,
        auth: false,
        exact: false
    },
    {
        key: routeRules.users,
        path: routeRules.users,
        component: Users,
        auth: true,
        exact: false
    },
    {
        key: routeRules.hr,
        path: routeRules.hr,
        component: Users,
        auth: true,
        exact: false
    },
    {
        key: routeRules.finance,
        path: routeRules.finance,
        component: Users,
        auth: true,
        exact: false
    },
    {
        key: routeRules.inventory,
        path: routeRules.inventory,
        component: Users,
        auth: true,
        exact: false
    },
    {
        key: routeRules.settings,
        path: routeRules.settings,
        component: Users,
        auth: true,
        exact: false
    }
];