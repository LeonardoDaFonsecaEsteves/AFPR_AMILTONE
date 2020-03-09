import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.style.scss";
import Login from "./components/Login/login";
import MyRoute from "./routes/myRoute";
import Userindex from "./components/User/Userindex";

function App() {
  const [state, setState] = useState({
    isLog: false,
    role: ""
  });

  const switchRoute = role => {
    switch (role) {
      case "rh":
        setState({ role: "rh", isLog: true });
        break;
      case "admin":
        setState({ role: "admin", isLog: true });
        break;
      case "user":
        setState({ role: "user", isLog: true });
        break;
      case "logout":
        setState({ role: "", isLog: false });
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              state.isLog ? (
                <MyRoute logOut={role => switchRoute(role)} role={state.role} />
              ) : (
                <Login switchRoute={role => switchRoute(role)} />
              )
            }
          ></Route>
          <Route path="/user">
            <Userindex />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
