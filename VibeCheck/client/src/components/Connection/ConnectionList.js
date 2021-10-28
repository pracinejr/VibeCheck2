import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router";
import "./Connection.css";
import { getUsersByFirebaseUserId } from "../../modules/UserManager";  
import { getConnectionsByUserId } from "../../modules/ConnectionManager.js";
import { ConnectionCard } from "./ConnectionCard";
import { Link } from "react-router-dom";

export const ConnectionList = () => {
    const history = useHistory()
    const { connectionId } = useParams();
    const [connections, setConnections] = useState([])
    // const user = firebase.auth().currentUser
    
    const getConnections = () => {
        getConnectionsByUserId().then(connections => setConnections(connections));
    }

    useEffect(() => {
        getConnections()
    }, []);

    return (
        <div className="connection-container">
            <div>
                <Link to="/connection/create">New Connection</Link>
            </div>
            <div>
            {connections.map((connection) => {
               return <ConnectionCard connection={connection} key={connection.id} />
            })}
            </div>
        </div>
    );
};