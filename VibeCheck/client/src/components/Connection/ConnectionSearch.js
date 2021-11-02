import React from "react";
import { searchConnections } from "../../modules/ConnectionManager";
import "./Connection.css";

export const ConnectionSearch = ({ setConnections }) => {
  return (
    <div className="searchDiv">
      <div className="searchBar"></div>
      <input
        type="text"
        className="input--wide search-text-area"
        onKeyUp={(event) => {
          searchConnections(event.target.value).then((ConnectionResults) => {
            setConnections(ConnectionResults);
          });
        }}
        placeholder="Search for a Connection..."
      />
    </div>
  );
};
