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
  baseURL: BASE_URL,
  headers: {
    app_api_key: APP_API_KEY,
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FrYXJhdC5kZXZlbG9jaXR5LmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY2MjgyNTMwMiwiZXhwIjoxNjYzNDMwMTAyLCJuYmYiOjE2NjI4MjUzMDIsImp0aSI6InNQSzI5aG5BeWw2ZmptaVYiLCJzdWIiOiIzMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F3WdQU7TNLSKC6TSCYc8dMZxh0Zy1MEpZV4_74C1BkI",
  },
});
