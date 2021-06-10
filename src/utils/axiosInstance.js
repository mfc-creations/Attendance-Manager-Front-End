import axios from "axios";

export default (role, history = null) => {
  const baseURL = "http://localhost:8000/api/v1";

  let headers = {};
  if (localStorage.getItem(role)) {
    headers.Authorization = `${localStorage.getItem(role)}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403 || error.response.status === 401) {
        localStorage.removeItem("student");
        localStorage.removeItem("admin");

        if (history) {
          history.push("/");
        } else {
          window.location = "/";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
