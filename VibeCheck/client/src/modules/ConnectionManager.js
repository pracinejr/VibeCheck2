import firebase from "firebase/app";
import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = "/api/connection";

export const getConnectionsByUserId = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetMyConnections`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occured. Please try to get connections again."
        );
      }
    });
  });
};

export const getConnectionsById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetById/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occured. Please try to get connections again."
        );
      }
    });
  });
};

export const addConnection = (connection) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(connection),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new connection."
        );
      }
    });
  });
};

export const updateConnection = (connection) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/edit/${connection.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(connection),
    }).then(
      (resp) =>
        // {
        getConnectionsByUserId()

      // if (resp.ok) {
      //   return resp.json();
      // } else if (resp.status === 401) {
      //   throw new Error("Unauthorized");
      // } else {
      //   throw new Error(
      //     "An unknown error occurred while trying to update this connection."
      //   );
      // }
      // }
    );
  });
};

// export const deleteConnection = (id) => {
//   return getToken().then((token) => {
//     return fetch(`${baseUrl}/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(id),
//     });
//   });
// };
