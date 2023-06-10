import axios from "axios";

import { auth } from "./auth";
import { getAuthToken } from "./authTokenManager";

const createApi = () => {
  //Create axios instance
  const client = axios.create({
    baseURL: "http://localhost:4001",
  });

  client.defaults.headers.common.Authorization = `Bearer token ${getAuthToken()}`;

  return {
    auth: auth({ axiosInstance: client }),
  };
};

export const api = createApi();
