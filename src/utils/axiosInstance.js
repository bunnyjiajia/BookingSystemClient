import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://helloworld04.sit.kmutt.ac.th:3000/api",
});