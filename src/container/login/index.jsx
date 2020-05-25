import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {routeRules} from "../../routes/routeRules";

const Login = (props) => {

    const history = useHistory();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();

        if (userId === "Admin" && password === "Admin"){
            localStorage.setItem('user', userId)
            history.push(routeRules.hr)
        } else if (userId === "User" && password === "User"){
            localStorage.setItem('user', userId)
            history.push(routeRules.hr)
        } else {
            alert("Please enter valid credentials")
        }
    };

    return (
        <div className="container">
            <div className="login">
                <form className="login-form">
                    <div className="form-group">
                        <input type="text"
                               className=""
                               placeholder="Enter UserId"
                               onChange={({target: {value}}) => setUserId(value)}
                               value={userId}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className=""
                               placeholder="Password"
                               value={password}
                               onChange={({target: {value}}) => setPassword(value)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={login}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;