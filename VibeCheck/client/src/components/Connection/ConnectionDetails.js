import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router";
import { getConnectionsById } from "../../modules/ConnectionManager";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";

export const ConnectionDetails = () => {
  const [connection, setConnection] = useState();
  const { id } = useParams();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/connection/edit/${connection.id}`);
  };

  const handleBack = () => {
    history.push("/connection");
  };

  useEffect(() => {
    getConnectionsById(id).then((c) => {
      setConnection(c);
    });
  }, []);

  return (
    <>
      <div className="connection-details-container">
        <Card className="connection-details">
          <CardImg
            top
            width="100%"
            src={connection?.acquaintance.imageLocation}
            alt="Detail Image"
          />
          <CardBody>
            <div className="connection-detail-info">
              <CardTitle tag="h2">{connection?.acquaintance.Name}</CardTitle>
              <CardSubtitle tag="h4">
                <ul>
                  <li>
                    <image
                      className="connection-mutual-friend"
                      src={connection?.mutualFriend.imageLocation}
                      alt="mutual fiend image"
                    />
                    Mutual friend: {connection?.mutualFriend.name}
                  </li>
                  <li>
                    Where you met this connection: {connection?.venue.name}
                  </li>
                  <li>
                    Date Connection was created: {connection?.dateCreated}
                  </li>
                </ul>
                <CardText>Notes: {connection?.notes}</CardText>
              </CardSubtitle>
            </div>
          </CardBody>
          <Button className="Edit-button" onClick={handleEdit}>
            Edit Connection
          </Button>
          <Button className="Back-button" onClick={handleBack}>
            Back to Connections
          </Button>
        </Card>
      </div>
    </>
  );
};

export default ConnectionDetails;
