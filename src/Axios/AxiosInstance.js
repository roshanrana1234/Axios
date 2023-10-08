import axios from "axios";
import { getToken } from "../AllTokens/AccessToken";

const token = getToken("token");
// const token = localStorage.getItem('token');

const Instance = axios.create({
  baseURL: "http://localhost:8000/", // Set a base URL for all requests
  timeout: 5000, // Set a timeout of 5 seconds for requests
  headers: {
    // Authorization: "Bearer " + token, // Set default headers
    Authorization: token ? `Bearer ${token}` : "", // Set default headers
    Authorization: token ? `Bearer ${localStorage.getItem("token")}` : "", // Set default headers
    Authorization: token ? `Bearer ${token}` : "", // Set default headers
    "Content-Type": "application/json",
  },
});

export default Instance;
