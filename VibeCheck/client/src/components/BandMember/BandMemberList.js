import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router";
import "./BandMember.css";
import { getAllBandMembers } from "../../modules/BandMemberManager.js";
import { BandMemberCard } from "./BandMemberCard";

export const BandMemberList = ({ id }) => {
  const history = useHistory();
  const [bandMembers, setBandMembers] = useState([]);
  const bandId = id;
  const [currentLocation, setCurrentLocation] = useState("");

  const getBandMembers = (id) => {
    getAllBandMembers(parseInt(id)).then((bandMembers) =>
      setBandMembers(bandMembers)
    );
  };

  const location = history.location.pathname;

  const handleNewBandMember = () => {
    history.push(`/bandMember/create/${bandId}`);
  };

  useEffect(() => {
    getBandMembers(id);
  }, [location]);

  return (
    <div className="bandMember-container">
      <div>
        <Button className="BandMember-btn" onClick={handleNewBandMember}>
          Add a New BandMember
        </Button>
      </div>
      <div>
        {bandMembers.map((bandMember) => {
          return <BandMemberCard bandMember={bandMember} key={bandMember.id} />;
        })}
      </div>
    </div>
  );
};
