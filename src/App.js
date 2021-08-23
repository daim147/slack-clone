import React from "react";
import "./App.styles.js";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import { Appbody } from "./App.styles.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "./component/Sidebar/Sidebar.jsx";
import Chat from "./component/Chat/Chat.jsx";
import NotSelectedPage from "./component/Chat/NotSelected.jsx";
import { auth } from "./firebase/index.js";
import Login from "./component/Login/Login.jsx";
import LoaderSpinner from "./component/Loader/Loader.jsx";
import { useHistory } from "react-router-dom";

function App() {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  if (loading) {
    return <LoaderSpinner type="Bars" height="100vh" />;
  }

  if (!user) {
    history.push("/");
    return <Login />;
  }
  return (
    <div className="app">
      <Header />
      <Appbody container>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <NotSelectedPage />
          </Route>
          <Route path="/room/:roomId" exact>
            <Chat />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Appbody>
    </div>
  );
}

export default App;
