import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import "./Venue.css";
import { getAllVenues } from "../../modules/VenueManager.js";
import { VenueCard } from "./VenueCard";

export const VenueList = () => {
  const history = useHistory();
  const [venues, setVenues] = useState([]);

  const getVenues = () => {
    getAllVenues().then((venues) => setVenues(venues));
  };

  const handleNewVenue = () => {
    history.push("/Venue/create");
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <div className="venue-container">
      <div>
        <h2> All Venues </h2>
        <Button className="venue-btn" onClick={handleNewVenue}>
          Add a New Venue
        </Button>
      </div>
      <div className="venue-cards">
        {venues.map((venue) => {
          return (
            <VenueCard venue={venue} key={venue.id} setVenues={setVenues} />
          );
        })}
      </div>
    </div>
  );
};
