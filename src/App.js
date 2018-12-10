import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Routes } from "routes";
import { Header, Navigation, DesktopHeader } from "components";

import "styles/index.scss";

export class App extends Component {
  render() {
    return (
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          render={({ location }) => (
            <div className="App">

              <DesktopHeader />

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Header />
                : null }
              
                  {Routes(location)}

              {location.pathname === ("/") || location.pathname.startsWith("/Mappa") 
                ? <Navigation />
                : null }

            </div>
          )}
        />
    );
 }
}

