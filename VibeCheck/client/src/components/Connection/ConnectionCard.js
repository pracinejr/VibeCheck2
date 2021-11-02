import React from "react";
import { useHistory } from "react-router";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./Connection.css";

export const ConnectionCard = ({ connection }) => {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/connection/detail/${connection.id}`);
  };

  return (
    <>
      <div className="connection-card-container">
        <Card className="connection-card">
          <CardImg
            className="connection-card-image"
            top
            width="100%"
            src={connection.acquaintance.imageLocation}
            alt="Card image"
            onClick={handleDetails}
          />
          <CardBody>
            <div className="card-subtitle">
              <CardTitle tag="h5">{connection.acquaintance.name}</CardTitle>
            </div>
            <div className="connection-buttons">
              <Button className="connection-btn" onClick={handleDetails}>
                View Details
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
