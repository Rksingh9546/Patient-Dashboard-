import axios from "axios";

const username = "coalition";
const password = "skills-test";

const encodedCredentials = btoa(
  `${username}:${password}`
);

const api = axios.create({
  baseURL:
    "https://fedskillstest.coalitiontechnologies.workers.dev",

  headers: {
    Authorization: `Basic ${encodedCredentials}`,
  },
});

export default api;