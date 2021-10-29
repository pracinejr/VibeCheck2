import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getBandById } from "../../modules/BandManager";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { BandMemberList } from "../BandMember/BandMemberList";

export const BandDetails = () => {
  const [band, setBand] = useState();
  const { id } = useParams();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/band/edit/${band.id}`);
  };

  const handleBack = () => {
    history.push("/Band");
  };

  useEffect(() => {
    getBandById(parseInt(id)).then((c) => {
      setBand(c);
    });
  }, []);

  return (
    <>
      <div className="band-details-container">
        <Card className="band-details">
          <CardBody>
            <div className="band-detail-info">
              <CardTitle tag="h2">{band?.name}</CardTitle>
              <CardSubtitle tag="h4">
                <BandMemberList id={parseInt(id)} />
              </CardSubtitle>
            </div>
          </CardBody>
          <Button className="Edit-button" onClick={handleEdit}>
            Edit Band
          </Button>
          <Button className="Back-button" onClick={handleBack}>
            Back to Bands
          </Button>
        </Card>
      </div>
    </>
  );
};

export default BandDetails;
