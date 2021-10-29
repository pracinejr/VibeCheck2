import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./BandMember.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  getBandMemberById,
  addBandMember,
  updateBandMember,
} from "../../modules/BandMemberManager";
import { getAllUsers } from "../../modules/UserManager";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";
import firebase from "firebase";

export const BandMemberForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [bandMember, setBandMember] = useState({
    userId: "",
    bandId: "",
  });
  const userFirebaseId = firebase.auth().currentUser.uid;
  const [user, setUser] = useState({});

  const handleCancel = () => {
    history.push("/bandMember");
  };

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newBandMember = { ...bandMember };
    newBandMember[event.target.id] = event.target.value;
    setBandMember(newBandMember);
  };

  useEffect(() => {
    getUsersByFirebaseUserId(userFirebaseId).then(setUser);
    getAllUsers().then(setUser);
    if (id) {
      getBandMemberById(id).then(setBandMember);
    }
  }, []);

  const handleSaveBandMember = () => {
    if (id) {
      updateBandMember({
        userId: bandMember.userId,
      }).then(history.push(`/bandMember/detail/${id}`));
    } else {
      addBandMember({
        userId: bandMember.userId,
      }).then(history.push("/band"));
    }
  };

  return (
    <>
      <Form className="new-BandMember-form">
        {id ? <h1>Update BandMember</h1> : <h1>Add New BandMember</h1>}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleControlledInputChange}
            value={bandMember.name}
          />
        </FormGroup>
        <FormGroup className="BandMember-buttons">
          {id ? (
            <Button className="BandMember-btn" onClick={handleSaveBandMember}>
              Update BandMember
            </Button>
          ) : (
            <Button className="BandMember-btn" onClick={handleSaveBandMember}>
              Add BandMember
            </Button>
          )}
          <Button className="BandMember-btn" onClick={handleCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
