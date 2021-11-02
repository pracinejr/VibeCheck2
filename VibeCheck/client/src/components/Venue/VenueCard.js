import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Venue.css";

import { useHistory } from "react-router";

export const VenueCard = ({ venue }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/venue/edit/${venue.id}`);
  };

  return (
    <>
      <div className="venue-card-container">
        <Card className="venue-card">
          <CardBody>
            <div className="card-subtitle">
              <CardTitle tag="h5">{venue.name}</CardTitle>
            </div>
            <div className="venue-buttons">
              <Button className="venue-btn" onClick={handleEdit}>
                Edit Venue
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
