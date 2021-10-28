import React from "react";
import { Card, CardBody } from "reactstrap";
import './User.css'

const User = ({ user }) => {
    
  return (
      <>
      <Card >
      <CardBody className="userCard">
      <div><img src={user.imageLocation} className="userimg" alt={user.name}/></div>
          <div><h3>{user.name}</h3>      
          <br/>
          </div>
      </CardBody>   
    </Card>
    </>
  );
};

export default User;