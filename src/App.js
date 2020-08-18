import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router";
import GlobalStyle from "./assets/globalStyles";
import GoogleFontLoader from "react-google-font-loader";

import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/dashboard";
import Trainings from "./pages/trainings";
import Calendar from "./pages/calendar";

function App() {
    return (
        <div className="App">
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Montserrat',
                        weights: [400, 700],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek', 'latin']}
            />
            <GlobalStyle/>
            <Switch>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/trainings" component={Trainings}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);
