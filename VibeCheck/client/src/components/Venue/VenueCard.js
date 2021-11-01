import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./Venue.css";
import { deleteVenue } from "../../modules/VenueManager";
import { getAllVenues } from "../../modules/VenueManager";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router";

export const VenueCard = ({ venue }) => {
  const history = useHistory();

  //   const handleDelete = () => {
  //     deleteVenue(venue.id).then(getAllVenues().then(setVenues));
  //   };

  const handleEdit = () => {
    history.push(`/venue/edit/${venue.id}`);
  };

  return (
    <>
      <div className="Venue-card-container">
        <Card className="Venue-card">
          <CardBody>
            <div className="card-subtitle">
              <CardTitle tag="h5">{venue.name}</CardTitle>
            </div>
            <div className="Venue-buttons">
              <Button className="Venue-btn" onClick={handleEdit}>
                Edit Venue
              </Button>
              {/* <Button className="Venue-btn" onClick={handleDelete}>
                Delete Venue
              </Button> */}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
