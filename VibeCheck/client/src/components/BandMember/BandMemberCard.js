import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { getBandById } from "../../modules/BandManager";
import {
  deleteBandMember,
  getAllBandMembers,
} from "../../modules/BandMemberManager";
import "./BandMember.css";

export const BandMemberCard = ({ bandMember, setBandMembers, bandId }) => {
  const handleDelete = () => {
    deleteBandMember(bandMember.id).then(
      getAllBandMembers(bandId).then(setBandMembers)
    );
  };

  return (
    <>
      <div className="bandMember-card-container">
        <Card className="bandMember-card">
          <CardBody>
            <div className="card-subtitle">
              <CardTitle tag="h5">{bandMember.user.name}</CardTitle>
            </div>
            <div className="bandMember-buttons"></div>
            <div className="bandMember-buttons">
              <Button className="BandMember-btn" onClick={handleDelete}>
                Remove Member From Band
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
