import React from "react";
import { useHistory, useParams } from "react-router";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Connection.css";
import firebase from "firebase";

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
            <div className="Connection-buttons">
              <Button className="Connection-btn" onClick={handleDetails}>
                View Details
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
