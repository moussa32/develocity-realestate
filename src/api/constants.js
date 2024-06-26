import axios from "axios";

const BASE_URL = "https://akarat.develocity.app/api/";
const APP_API_KEY = "wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P";

export const globalInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    app_api_key: APP_API_KEY,
  },
});

export const authentcatedInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    app_api_key: APP_API_KEY,
    "Content-Type": "application/json",
  },
});
