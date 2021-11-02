import React from "react";
import { Link } from "react-router-dom";

export const Hello = () => {
  return (
    <>
      <h1>Welcome To Vibe Check!</h1>
      <Link className="Link" to="/connection">
        Continue to your Connections
      </Link>
    </>
  );
};
