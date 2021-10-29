import firebase from "firebase/app";
import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = "/api/band";

export const getAllBands = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetAllBands`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unkown error occured.Please try to get bands again."
        );
      }
    });
  });
};

export const getBandById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unkown error occured.Please try to get the band again."
        );
      }
    });
  });
};

export const addBand = (band) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unkown error occured.Please try to add band again."
        );
      }
    });
  });
};

export const deleteBand = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
  });
};

export const updateBand = (band) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${band.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unkown error occured.Please try to get connections again."
        );
      }
    });
  });
};
