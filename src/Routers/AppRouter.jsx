import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { CalendarPage } from '../Components/App/CalendarPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div className="">
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter }
                        isAuth={ false } 
                    />
                    
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ CalendarPage } 
                        isAuth={ true } 
                    />
                </Switch>
            </div>
        </Router>
    )
}
