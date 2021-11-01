import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./BandMember.css";
import { Button, Form, FormGroup, Label, Input, Select } from "reactstrap";
import { addBandMember } from "../../modules/BandMemberManager";
import { getAllUsers } from "../../modules/UserManager";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";
import firebase from "firebase";
import { getBandById } from "../../modules/BandManager";

export const BandMemberForm = () => {
  const history = useHistory();
  const { bandId } = useParams();
  const [bandMember, setBandMember] = useState({
    userId: "",
    bandId: "",
  });
  const userFirebaseId = firebase.auth().currentUser.uid;
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [band, setBand] = useState({});

  const handleCancel = () => {
    history.push(`/band/detail/${bandId}`);
  };

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newBandMember = { ...bandMember };
    newBandMember[event.target.id] = event.target.value;
    setBandMember(newBandMember);
  };

  useEffect(() => {
    getUsersByFirebaseUserId(userFirebaseId).then(setUser);
    if (bandId) {
      getBandById(bandId).then(setBand);
    }
    getAllUsers().then(setUsers);
  }, []);

  const handleSaveBandMember = () => {
    if (bandMember.userId === undefined || bandMember.bandId === undefined) {
      window.alert("Please complete the form");
    } else {
      const newBandMember = {
        userId: bandMember.userId,
        bandId: bandId,
      };
      addBandMember(newBandMember).then(history.push(`/band/detail/${bandId}`));
    }
  };

  return (
    <>
      <Form className="new-BandMember-form">
        <h1>{"Add New Band Member"}</h1>
        <FormGroup>
          <Label htmlFor="bandMember">Band Member</Label>
          <Input
            id="userId"
            type="select"
            name="bandMember"
            onChange={handleControlledInputChange}
          >
            <option
              option
              id="userId"
              name="bandMember"
              onChange={handleControlledInputChange}
            >
              {" "}
              Select a New Band Member{" "}
            </option>
            {users.map((user) => {
              return (
                <option
                  id="userId"
                  name="bandMember"
                  value={user.id}
                  onChange={handleControlledInputChange}
                >
                  {user.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <FormGroup className="BandMember-buttons">
          <Button className="BandMember-btn" onClick={handleSaveBandMember}>
            Add BandMember
          </Button>
          <Button className="BandMember-btn" onClick={handleCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
