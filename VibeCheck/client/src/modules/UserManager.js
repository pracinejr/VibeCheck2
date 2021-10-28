import "firebase/auth";
import { getToken } from "./authManager";

const baseUrl = '/api/user';

export const getAllUsers = () => {
    return getToken().then((token) => {  
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
    } else if (resp.status === 401) {
        throw new Error("Unauthorized");
    } else {
        throw new Error("An unknown error occurred while trying to save a new post.");
    }
    });
  });
  };

  export const getUsersByFirebaseUserId = (firebaseUserId) => {
    return getToken().then((token) => {  
    return fetch(`${baseUrl}/${firebaseUserId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
    } else if (resp.status === 401) {
        throw new Error("Unauthorized");
    } else {
        throw new Error("An unknown error occurred while trying to save a new post.");
    }
    });
  });
  };
