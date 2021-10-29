import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./BandMember.css";

export const BandMemberCard = ({ bandMember }) => {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/bandMember/detail/${bandMember.id}`);
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
              <Button className="BandMember-btn" onClick={handleDetails}>
                View Details
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
