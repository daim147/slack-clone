import React from "react";
import "./App.styles.js";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import { Appbody } from "./App.styles.js";
import Sidebar from "./component/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Appbody container>
            <Sidebar />
          </Appbody>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
