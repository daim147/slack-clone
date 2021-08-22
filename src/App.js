import React from "react";
import "./App.styles.js";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import { Appbody } from "./App.styles.js";
import Sidebar from "./component/Sidebar/Sidebar.jsx";
import Chat from "./component/Chat/Chat.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Appbody container>
          <Sidebar />
          <Route path="/" exact>
            <Chat />
          </Route>
        </Appbody>
      </Switch>
    </div>
  );
}

export default App;
