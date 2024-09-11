
// set token in localStorage
export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

// get token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};
