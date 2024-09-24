import {getToken} from "./AllHelpers.js";
export function authHeaders() {
    let token = getToken();
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
  }
  
  export function withOutAuthHeaders() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
  