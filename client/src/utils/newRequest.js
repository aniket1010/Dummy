import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://gigster-backend-59q9.onrender.com",
  withCredentials: true,
});

export default newRequest;
