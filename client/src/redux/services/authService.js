import axios from "axios";
const API_URL = "https://equestrianism.vercel.app/api/auth";
//register

const register = async (user) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
axios.defaults.withCredentials = true
  
  const response = await axios.post(`${API_URL}/register`, user, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = async () => {
  localStorage.removeItem("user");
};
//login
const login = async (user) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
axios.defaults.withCredentials = true
  
  const response = await axios.post(`${API_URL}/login`, user, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const authService = {
  register,
  logout,
  login,
};
export default authService;
