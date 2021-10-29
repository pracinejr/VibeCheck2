import firebase from "firebase/app";
import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = "/api/bandMember";

export const getAllBandMembers = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetAllBandMembers/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unkown error occured.Please try to get Band Members again."
        );
      }
    });
  });
};

export const getBandMemberById = (id) => {
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
          "An unkown error occured.Please try to get the Band Member again."
        );
      }
    });
  });
};

export const addBandMember = (bandMember) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bandMember),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unkown error occured.Please try to add bandMember again."
        );
      }
    });
  });
};

export const deleteBandMember = (id) => {
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

export const updateBandMember = (bandMember) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${bandMember.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bandMember),
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
