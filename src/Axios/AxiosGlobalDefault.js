import axios from "axios";
import { getToken } from "../AllTokens/AccessToken";

const token = getToken("token");

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const newInstance = axios.create({
  baseURL: "http://localhost:9000/", // Set a base URL for all requests
  timeout: 10000, // Set a timeout of 5 seconds for requests
  headers: {
    // Authorization: "Bearer " + token, // Set default headers
    Authorization: token ? `Bearer ${token}` : "", // Set default headers
    Authorization: token ? `Bearer ${localStorage.getItem("token")}` : "", // Set default headers
    Authorization: token ? `Bearer ${token}` : "", // Set default headers
    "Content-Type": "application/json",
  },
});

newInstance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
newInstance.defaults.timeout = 2500;

export default newInstance;
