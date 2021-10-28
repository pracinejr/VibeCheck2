import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { register } from "../modules/authManager";
import axios from "axios";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [imageLocation, setImageLocation] = useState();
  const [imageSelected, setImageSelected] = useState(null);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isUploading, setIsUploading] = useState(false);
 

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const user = { name, imageLocation, email };
      register(user, password).then(() => history.push("/"));
    }
  };

  useEffect(() => {
    setIsUploading(true);
    imageUpload();
  }, [imageSelected]);

  const imageUpload = () => {
    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "a3cpgijc");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/pracinejr/image/upload",
          formData
        )
        .then((res) => {
          const imageForUser = res.data.secure_url;
          setImageLocation(imageForUser);
        });
    }
  };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="image-upload-field">
          <Label for="imageLocation">Uploade user Image</Label>
          <br></br>
          <Input
            onChange={(event) => {
              return setImageSelected(event.target.files[0]);
            }}
            type="file"
            name="file"
            id="imageLocation"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}
