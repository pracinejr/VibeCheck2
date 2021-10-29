import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Hello } from "./Hello";
import { ConnectionList } from "./Connection/ConnectionList.js";
import { ConnectionForm } from "./Connection/ConnectionForm";
import { ConnectionDetails } from "./Connection/ConnectionDetails";
import { BandList } from "./Band/BandList";
import { BandDetails } from "./Band/BandDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connection" exact>
          {isLoggedIn ? <ConnectionList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connection/edit/:id(\d+)">
          {isLoggedIn ? <ConnectionForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connection/create">
          {isLoggedIn ? <ConnectionForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/connection/detail/:id(\d+)">
          {isLoggedIn ? <ConnectionDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/band" exact>
          {isLoggedIn ? <BandList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/band/detail/:id(\d+)">
          {isLoggedIn ? <BandDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
