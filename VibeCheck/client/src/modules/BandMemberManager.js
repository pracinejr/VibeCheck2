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
    }).then((resp) => resp.json());
  });
};

export const getBandMemberById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => resp.json());
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
    }).then((resp) => resp.json());
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
    }).then((resp) => getAllBandMembers());
  });
};
