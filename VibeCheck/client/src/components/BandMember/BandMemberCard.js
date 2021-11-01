import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { deleteBandMember } from "../../modules/BandMemberManager";
import "./BandMember.css";

export const BandMemberCard = ({ bandMember, band }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/bandMember/edit/${bandMember.id}`);
  };

  const handleDelete = () => {
    deleteBandMember(bandMember.id).then(
      history.push(`/band/detail/${band.id}`)
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
            <div className="bandMember-buttons">
              <Button className="BandMember-btn" onClick={handleEdit}>
                Edit Band Member
              </Button>
            </div>
            <div className="bandMember-buttons">
              <Button className="BandMember-btn" onClick={handleDelete}>
                Delete Band Member
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
