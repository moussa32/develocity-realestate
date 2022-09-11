import axios from "axios";

export const globalInstance = axios.create({
  baseURL: "https://akarat.develocity.app/api/",
  headers: {
    app_api_key: "wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P",
  },
});

export const authentcatedInstance = axios.create({
  baseURL: "https://akarat.develocity.app/api/",
  headers: {
    app_api_key: "wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FrYXJhdC5kZXZlbG9jaXR5LmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY2MjgyNTMwMiwiZXhwIjoxNjYzNDMwMTAyLCJuYmYiOjE2NjI4MjUzMDIsImp0aSI6InNQSzI5aG5BeWw2ZmptaVYiLCJzdWIiOiIzMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.F3WdQU7TNLSKC6TSCYc8dMZxh0Zy1MEpZV4_74C1BkI",
  },
});
