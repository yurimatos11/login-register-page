
import React from "react";
import { Switch, Route } from "react-router-dom";

import login from '../pages/login';
import register from '../pages/register';

function routes() {
    return (
        <Switch>
            <Route path="/register" component={register}/>
            <Route path="/" component={login}/>
        </Switch>
        
    );
}


export default routes;