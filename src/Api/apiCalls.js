import axios from "axios";
import { baseURL } from "../constants/baseURL";

export const getApi = (endpoint) => {
  return axios
    .get(`${baseURL}/${endpoint}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("err", err);
      return false;
    });
};

export const postApi = (endpoint, data) => {
  return axios.post(`${baseURL}/${endpoint}`, data);
};

export const putApi = (endpoint, data) => {
  return axios.put(`${baseURL}/${endpoint}`, data);
};

export const deleteApi = (endpoint) => {
  return axios.delete(`${baseURL}/${endpoint}`);
};
