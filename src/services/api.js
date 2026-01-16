import axios from "axios";

const API = axios.create({
  baseURL: "https://example.com/api",
});

export default API;
