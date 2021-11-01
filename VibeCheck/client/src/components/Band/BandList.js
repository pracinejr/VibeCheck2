import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import "./Band.css";
import { getAllBands } from "../../modules/BandManager.js";
import { BandCard } from "./BandCard";

export const BandList = () => {
  const history = useHistory();
  const [bands, setBands] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  const getBands = () => {
    getAllBands().then((bands) => setBands(bands));
  };

  const location = history.location.pathname;

  const handleNewBand = () => {
    history.push("/band/create");
  };

  useEffect(() => {
    getBands();
  }, [location]);

  return (
    <div className="Band-container">
      <div>
        <Button className="Band-btn" onClick={handleNewBand}>
          Add a New Band
        </Button>
      </div>
      <div>
        {bands.map((band) => {
          return <BandCard band={band} key={band.id} />;
        })}
      </div>
    </div>
  );
};
