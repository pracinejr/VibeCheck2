import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import "./Connection.css";
import { getConnectionsByUserId } from "../../modules/ConnectionManager.js";
import { ConnectionCard } from "./ConnectionCard";

export const ConnectionList = () => {
  const history = useHistory();
  const [connections, setConnections] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const getConnections = () => {
    getConnectionsByUserId().then((connections) => setConnections(connections));
  };

  const handleNewConnection = () => {
    history.push("/connection/create");
  };

  const location = history.location.pathname;

  useEffect(() => {
    getConnections();
  }, [location]);

  return (
    <div className="connection-container">
      <div>
        <Button className="connection-btn" onClick={handleNewConnection}>
          Add a New Connection
        </Button>
      </div>
      <div>
        {connections.map((connection) => {
          return <ConnectionCard connection={connection} key={connection.id} />;
        })}
      </div>
    </div>
  );
};
