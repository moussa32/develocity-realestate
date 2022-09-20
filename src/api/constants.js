import axios from "axios";

const BASE_URL = "https://akarat.develocity.app/api/";
const APP_API_KEY = "wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P";

export const globalInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    app_api_key: APP_API_KEY,
    "Content-type": "application/json",
  },
});

export const authentcatedInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    app_api_key: APP_API_KEY,
  },
});
