import { useMutation, useQuery } from "react-query";

import { api } from "../api";

// For registering new users
export const useAddNewUser = () => {
  return useMutation((user) => api.auth.createUser(user));
};

// For getting registered users
export const useUserInfo = () => {
  return useQuery("registered-users", () => api.auth.getUsers());
};

// For login
export const useLoginUser = () => {
  return useMutation((user) => api.auth.login(user));
};
