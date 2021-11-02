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
import { BandMemberForm } from "./BandMember/BandMemberForm";
import { BandForm } from "./Band/BandForm";
import { VenueList } from "./Venue/VenueList";
import { VenueForm } from "./Venue/VenueForm";
import UserList from "./User/UserList";

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

        <Route path="/band/create" exact>
          {isLoggedIn ? <BandForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/band/edit/:bandId(\d+)" exact>
          {isLoggedIn ? <BandForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/band/detail/:id(\d+)">
          {isLoggedIn ? <BandDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/bandMember/create/:bandId">
          {isLoggedIn ? <BandMemberForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/venue" exact>
          {isLoggedIn ? <VenueList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/venue/create" exact>
          {isLoggedIn ? <VenueForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/venue/edit/:venueId">
          {isLoggedIn ? <VenueForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/user" exact>
          {isLoggedIn ? <UserList /> : <Redirect to="/login" />}
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
