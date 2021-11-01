import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Band.css";

export const BandCard = ({ band }) => {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/band/detail/${band.id}`);
  };

  return (
    <>
      <div className="band-card-container">
        <Card className="band-card">
          <CardBody>
            <div className="card-subtitle">
              <CardTitle tag="h5">{band.name}</CardTitle>
            </div>
            <div className="band-buttons">
              <Button className="Band-btn" onClick={handleDetails}>
                View Details
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
