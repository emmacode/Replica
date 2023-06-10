export const setAuthToken = (authToken) => {
  localStorage.setItem("authToken", authToken);
};

export const getAuthToken = () => {
  localStorage.getItem("authToken");
};

export const clearAuthToken = () => {
  localStorage.clearAuthToken("authToken");
};
