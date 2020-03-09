import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Rh from "../../app/components/Rh/Rh.index";
import Admin from "../../app/components/Admin/Admin.index";
import Userindex from "../../app/components/User/Userindex";

const MyRoute = ({ logOut, role }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            role === "rh" ? (
              <Rh logOut={role => logOut(role)} />
            ) : role === "admin" ? (
              <Admin logOut={role => logOut(role)} />
            ) : (
              <Userindex />
            )
          }
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
