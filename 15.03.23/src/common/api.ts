import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("API: ", response);
    return response;
  },
  (error) => {
    console.log("ERROR: ", error);
    return Promise.reject(error);
  }
);

export default apiClient