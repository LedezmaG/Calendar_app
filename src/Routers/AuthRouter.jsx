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
        <div 
            id='auth_main'
        >
            <div className="container">
                <div className="row align-items-center ustify-content-center auth__container">
                    <div 
                        id="auth__image"
                        className="col-md-6 "
                    > </div>

                    <div className="col-md-6 auth__form">
                        <Switch>
                            <Route exact path="/auth/login" component={ LoginPage } />
                            <Route exact path="/auth/register" component={ RegisterPage } />

                            <Redirect to="/auth/login" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}
