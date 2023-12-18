import axios from "axios";

// baseurl
export const baseURL = "http://localhost:3065";

// 요청
export const basicRequest = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
