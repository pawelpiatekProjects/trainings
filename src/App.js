import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router";
import GlobalStyle from "./assets/globalStyles";
import GoogleFontLoader from "react-google-font-loader";

import Home from "./pages/home";

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
            subsets={['cyrillic-ext', 'greek','latin']}
        />
        <GlobalStyle/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
