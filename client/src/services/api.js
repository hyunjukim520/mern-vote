import axios from "axios";

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`/${path}`, data);
  return response.data;
};

export default { call, setToken };
