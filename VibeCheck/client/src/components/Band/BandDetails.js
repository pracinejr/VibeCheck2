import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { deleteBand, getBandById } from "../../modules/BandManager";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { BandMemberList } from "../BandMember/BandMemberList";

export const BandDetails = () => {
  const [band, setBand] = useState();
  const { id } = useParams();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/band/edit/${band.id}`);
  };

  const [toggleBandMembers, setToggleBandMembers] = useState(false);

  const handleToggleBandMembers = () => {
    setToggleBandMembers(!toggleBandMembers);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you would like to delete this band? All band members will be deleted from this bad if you delete it."
    );
    if (confirmDelete) {
      console.log(band);
      deleteBand(band.id).then(() => {
        history.push(`/band`);
      });
    }
  };

  const handleBack = () => {
    history.push("/band");
  };

  useEffect(() => {
    getBandById(parseInt(id)).then((c) => {
      setBand(c);
    });
  }, [toggleBandMembers]);

  return (
    <>
      <div className="band-details-container">
        <Card className="band-details">
          <CardBody>
            <div className="band-detail-info">
              <CardTitle tag="h2">{band?.name}</CardTitle>
              <CardSubtitle tag="h4">
                <BandMemberList
                  id={id}
                  handleToggleBandMembers={handleToggleBandMembers}
                />
              </CardSubtitle>
            </div>
          </CardBody>
          <Button className="Edit-button" onClick={handleEdit}>
            Edit Band
          </Button>
          <Button className="Edit-button" onClick={handleDelete}>
            Delete Band
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
