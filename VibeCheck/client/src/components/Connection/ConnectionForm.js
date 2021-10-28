import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./Connection.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  getConnectionsById,
  getConnectionsByUserId,
  addConnection,
  updateConnection,
} from "../../modules/ConnectionManager";
import { getAllUsers } from "../../modules/UserManager";
import { getAllVenues } from "../../modules/VenueManager";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";
import firebase from "firebase";

export const ConnectionForm = () => {
  const history = useHistory();
  const { connectionId } = useParams();
  const [connection, setConnection] = useState({});
  const [connections, setConnections] = useState([]);
  const userFirebaseId = firebase.auth().currentUser.uid;
  const [users, setUsers] = useState([]);
  const [venues, setVenues] = useState([]);
  const [user, setUser] = useState({});
  // const [ didSubmit, setDidSubmit ] = useState(false);

  const handleCancel = () => {
    history.push("/connection");
  };

  const handleControlledInputChange = (event) => {
    event.preventDefault();
    const newConnection = { ...connection };
    newConnection[event.target.id] = event.target.value;
    setConnection(newConnection);
  };

  useEffect(() => {
    getUsersByFirebaseUserId(userFirebaseId).then(setUser);
    getAllUsers().then(setUsers);
    getAllVenues().then(setVenues);
    getConnectionsByUserId().then(setConnections);
    if (connectionId) {
      getConnectionsById(connectionId).then(setConnection);
    }
  }, []);

  const handleSaveConnection = () => {
    if (connectionId) {
      updateConnection(connection).then(
        history.push(`/connection/${connection.id}`)
      );
    } else {
      addConnection({
        userId: user.id,
        venueId: parseInt(connection.venueId),
        mutualFriendId: parseInt(connection.mutualFriendId),
        acquaintanceId: parseInt(connection.acquaintanceId),
        notes: connection.notes,
      }).then(history.push("/connection"));
    }
  };

  return (
    <>
      <Form className="new-connection-form">
        <h1>Add New onnection</h1>
        <FormGroup>
          <Label for="mutualFriend">Mutual Friend</Label>
          <Input
            id="mutualFriendId"
            type="select"
            name="microscopeId"
            onChange={handleControlledInputChange}
          >
            <option
              option
              id="mutualFriendOption"
              name="mutualFriendOption"
              onChange={handleControlledInputChange}
            >
              {" "}
              Select a Mutual Friend{" "}
            </option>
            {users.map((user) => {
              return (
                <option
                  id="mutualFriendId"
                  name="mutualFriendOption"
                  value={user.id}
                  onChange={handleControlledInputChange}
                >
                  {user.name}
                </option>
              );
            })}
            {console.log(connection, venues)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="acquaintance">Acquaintance</Label>
          <Input
            id="acquaintanceId"
            type="select"
            name="acquaintanceId"
            onChange={handleControlledInputChange}
          >
            <option
              option
              id="AcquaintanceId"
              name="AcquaintanceOption"
              onChange={handleControlledInputChange}
            >
              {" "}
              Select an Acquaintance{" "}
            </option>
            {users.map((user) => {
              return (
                <option
                  id="acquaintanceId"
                  name="AcquaintanceOption"
                  value={user.id}
                  onChange={handleControlledInputChange}
                >
                  {user.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="venue">Venue</Label>
          <Input
            id="venueId"
            type="select"
            name="venue"
            onChange={handleControlledInputChange}
          >
            <option
              option
              id="venueId"
              name="venue"
              onChange={handleControlledInputChange}
            >
              {" "}
              Select a Venue{" "}
            </option>
            {venues.map((venue) => {
              return (
                <option
                  id="venueId"
                  name="venue"
                  value={venue.id}
                  onChange={handleControlledInputChange}
                >
                  {venue.name}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Notes">Notes</Label>
          <Input
            id="notes"
            type="text"
            name="notes"
            onChange={handleControlledInputChange}
            value={connection.notes}
          />
        </FormGroup>
        <FormGroup className="connection-buttons">
          {connectionId ? (
            <Button className="connection-btn" onClick={handleSaveConnection}>
              Update Connection
            </Button>
          ) : (
            <Button className="connection-btn" onClick={handleSaveConnection}>
              Add Connection
            </Button>
          )}
          <Button className="connection-btn" onClick={handleCancel}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
