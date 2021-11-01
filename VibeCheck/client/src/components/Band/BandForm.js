import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./Band.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getBandById, addBand, updateBand } from "../../modules/BandManager";
import { getAllUsers } from "../../modules/UserManager";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";
import firebase from "firebase";

export const BandForm = () => {
  const history = useHistory();
  const { bandId } = useParams();
  const [band, setBand] = useState({
    name: "",
    id: "",
  });
  const userFirebaseId = firebase.auth().currentUser.uid;
  const [user, setUser] = useState({});

  const handleCancel = () => {
    history.push("/band");
  };

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newBand = { ...band };
    newBand[event.target.id] = event.target.value;
    setBand(newBand);
  };

  useEffect(() => {
    getUsersByFirebaseUserId(userFirebaseId).then(setUser);
    if (bandId) {
      getBandById(bandId).then(setBand);
    }
  }, []);

  const handleSaveBand = () => {
    if (band.name === undefined) {
      window.alert("Please complete the form");
    } else if (bandId) {
      updateBand({
        id: bandId,
        name: band.name,
      }).then(history.push(`/band/detail/${bandId}`));
    } else {
      const newBand = {
        // bandId: band.id,
        name: band.name,
      };
      addBand(newBand).then(history.push(`/band`));
    }
  };

  return (
    <>
      <Form className="new-Band-form">
        {bandId ? <h1>Update Band</h1> : <h1>Add New Band</h1>}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleControlledInputChange}
            value={band.name}
          />
        </FormGroup>
        <FormGroup className="Band-buttons">
          {bandId ? (
            <Button className="Band-btn" onClick={handleSaveBand}>
              Update Band
            </Button>
          ) : (
            <Button className="Band-btn" onClick={handleSaveBand}>
              Add Band
            </Button>
          )}
          <Button className="Band-btn" onClick={handleCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
