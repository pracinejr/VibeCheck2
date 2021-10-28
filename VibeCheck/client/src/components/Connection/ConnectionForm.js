import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import "./Connection.css";  
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getConnectionsById, getConnectionsByUserId, addConnection, updateConnection } from "../../modules/ConnectionManager";
import { getAllUsers } from "../../modules/UserManager";
// import { getAllVenues } from "../../modules/VenueManager";

export const ConnectionForm = () => {
    const history = useHistory()
    const { connectionId } = useParams();
    const [connection, setConnection] = useState({})
    // const user = firebase.auth().currentUser
    const [ users, setUsers ] = useState([]);
    const [ venues, setVenues ] = useState([]);

    const handleCancel = () => {
        history.push("/connection");
    }

    const handleControlledInputChange = (event) => {
        event.preventDefault();
        const newConnection = { ...connection }
        newConnection[event.target.id] = event.target.value
        setConnection(newConnection)
    }

    useEffect(() => {
        getConnectionsByUserId().then(setConnection)
        if(connectionId){
            getConnectionsById(connectionId).then(setConnection)
        }
    }, [])

    const handleSaveConnection = () => {  
        if(connectionId){
          updateConnection(connection).then(history.push(`/connection/${connection.id}`))
        } else {
          addConnection(connection).then(history.push("/connection"))
        }    
}


    return (
        <>
        <Form className="new-connection-form">
        <h1>Add New onnection</h1>
          <FormGroup>
            <Label for="connectionMutualFriend">Mutual Friend</Label>
           <Input id="connectionMutualFriend" type="select" name="microscopeId" onChange={handleControlledInputChange} >
             <option option id="mutualFriendOption" name="mutualFriendOption" onChange={handleControlledInputChange}> Select a Mutual Friend </option>
             {users.map(user=>{
               return <option id="mutualFriendOption" name="mutualFriendOption" value={user.id} onChange={handleControlledInputChange}></option>
             })}
           </Input>
          </FormGroup>
          <FormGroup>
            <Label for="connectionAcquaintance">Acquaintance</Label>
           <Input id="connectionAcquaintance" type="select" name="acquaintanceId" onChange={handleControlledInputChange} >
             <option option id="AcquaintanceOption" name="AcquaintanceOption" onChange={handleControlledInputChange}> Select an Acquaintance </option>
             {users.map(user=>{
               return <option id="AcquaintanceOption" name="AcquaintanceOption" value={user.id} onChange={handleControlledInputChange}></option>
             })}
           </Input>
          </FormGroup>
          <FormGroup>
            <Label for="connectionVenue">Venue</Label>
           <Input id="connectionVenue" type="select" name="microscopeId" onChange={handleControlledInputChange} >
             <option option id="venue" name="venue" onChange={handleControlledInputChange}> Select a Venue </option>
             {venues.map(venue=>{
               return <option id="venue" name="venue" value={venue.id} onChange={handleControlledInputChange}></option>
             })}
           </Input>
          </FormGroup>
          <FormGroup>
            <Label for="connectionNotes">Notes</Label>
            <Input id="connectionNotes" type="text" name="notes" onChange={handleControlledInputChange} value={connection.notes} />
          </FormGroup> 
          <FormGroup className="connection-buttons">
            {connectionId ? <Button className="connection-btn" onClick={handleSaveConnection}>Update Connection</Button> : <Button className="connection-btn" onClick={handleSaveConnection}>Add Connection</Button> }
            <Button className="connection-btn" onClick={handleCancel}>Cancel</Button>
          </FormGroup>
        </Form>
    
        </>
      );
    
}

