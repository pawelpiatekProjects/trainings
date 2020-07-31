import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, withRouter} from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
