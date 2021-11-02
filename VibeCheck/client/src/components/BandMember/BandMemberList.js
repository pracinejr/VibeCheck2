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

  const getBandMembers = (id) => {
    getAllBandMembers(parseInt(id)).then((bandMembers) =>
      setBandMembers(bandMembers)
    );
  };

  const handleNewBandMember = () => {
    history.push(`/bandMember/create/${bandId}`);
  };

  useEffect(() => {
    getBandMembers(id);
  }, []);

  return (
    <div className="bandMember-container">
      <div>
        <h4> Band Members: </h4>
        <Button className="BandMember-btn" onClick={handleNewBandMember}>
          Add a New BandMember
        </Button>
        {console.log(bandMembers)}
      </div>
      <div>
        {bandMembers.map((bandMember) => {
          return (
            <BandMemberCard
              bandMember={bandMember}
              key={bandMember.id}
              setBandMembers={setBandMembers}
            />
          );
        })}
      </div>
    </div>
  );
};
