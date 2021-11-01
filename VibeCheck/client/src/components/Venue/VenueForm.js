import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./Venue.css";
import { Button, Form, FormGroup, Label, Input, Select } from "reactstrap";
import { addVenue, updateVenue } from "../../modules/VenueManager";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";
import firebase from "firebase";
import { getVenueById } from "../../modules/VenueManager";

export const VenueForm = () => {
  const history = useHistory();
  const { venueId } = useParams();
  const [user, setUser] = useState({});
  const [venue, setVenue] = useState({
    name: "",
    id: "",
  });
  const userFirebaseId = firebase.auth().currentUser.uid;

  const handleCancel = () => {
    history.push(`/venue`);
  };

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newVenue = { ...venue };
    newVenue[event.target.id] = event.target.value;
    setVenue(newVenue);
  };

  useEffect(() => {
    getUsersByFirebaseUserId(userFirebaseId).then(setUser);
    if (venueId) {
      getVenueById(venueId).then(setVenue);
    }
  }, []);

  const handleSaveVenue = () => {
    if (venue.name === undefined) {
      window.alert("Please complete the form");
    } else if (venueId) {
      updateVenue({
        id: venue.id,
        name: venue.name,
      }).then(history.push(`/venue`));
    } else {
      const newVenue = {
        name: venue.name,
      };
      addVenue(newVenue).then(history.push(`/venue`));
    }
  };

  return (
    <>
      <Form className="new-Venue-form">
        {venueId ? <h1>Update Venue</h1> : <h1>Add New Venue</h1>}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleControlledInputChange}
            value={venue.name}
          />
        </FormGroup>
        <FormGroup className="Venue-buttons">
          {venueId ? (
            <Button className="Venue-btn" onClick={handleSaveVenue}>
              Update Venue
            </Button>
          ) : (
            <Button className="Venue-btn" onClick={handleSaveVenue}>
              Add Venue
            </Button>
          )}
          <Button className="Venue-btn" onClick={handleCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
