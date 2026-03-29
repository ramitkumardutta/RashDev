import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchGithub = (username) =>
  axios.get(`${BASE_URL}/github/${username}`);

export const fetchCodeforces = (handle) =>
  axios.get(`${BASE_URL}/codeforces/${handle}`);

export const getScore = (data) =>
  axios.post(`${BASE_URL}/score`, data);

export const getAI = (data) =>
  axios.post(`${BASE_URL}/ai`, data);

export const getRecruiter = (data) =>
  axios.post(`${BASE_URL}/recruiter`, data);