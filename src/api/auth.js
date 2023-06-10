import { setAuthToken } from "./authTokenManager";

export function auth({ axiosInstance }) {
  return {
    createUser: async function (params) {
      const { data } = await axiosInstance.post("/users", params);

      return data;
    },

    getUsers: async function () {
      const { data } = await axiosInstance.get("/users");

      return data;
    },

    login: async function (params) {
      const { data } = await axiosInstance.get("/users", {
        params,
      });

      if (data && data.length === 0) {
        throw new Error("User does not exist");
      }

      setAuthToken(JSON.stringify(data));

      return data[0];
    },
  };
}
