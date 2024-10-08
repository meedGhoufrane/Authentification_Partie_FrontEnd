import axios from 'axios';
const BASE_URL = "http://localhost:5000"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export default axiosInstance;
