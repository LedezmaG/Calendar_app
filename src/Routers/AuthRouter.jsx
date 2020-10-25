import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginPage } from '../Components/Auth/LoginPage';
import { RegisterPage } from '../Components/Auth/RegisterPage';

export const AuthRouter = () => {
    return (
        <div className="auth__main row ">
            <div className="col-6">

            </div>
            <div className="col-6 auth__content">
                <div className="auth__box">
                    <Switch>
                        <Route exact path="/auth/login" component={ LoginPage } />
                        <Route exact path="/auth/register" component={ RegisterPage } />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
