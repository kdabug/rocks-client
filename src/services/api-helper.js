import axios from "axios";

export const api = axios.create({
  baseURL: "https://tranquil-ravine-67605.herokuapp.com",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
});
