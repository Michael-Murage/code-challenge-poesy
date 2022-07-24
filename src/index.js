import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Favourites from "./components/Favourites";
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <App />
            </Route>
            <Route exact path='/favourites'>
                <Favourites />
            </Route>
        </Switch>
    </BrowserRouter>, document.getElementById("root"));
