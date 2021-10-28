import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { Hello } from "./Hello";
  import { ConnectionList } from "./Connection/ConnectionList.js";
import { ConnectionForm } from "./Connection/ConnectionForm";
import ConnectionDetails from "./Connection/ConnectionDetails";

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




// <Route path="" exact>
  //      {isLoggedIn ? /*enter module here*/ : <Redirect to="/login" />}
      //  </Route>