import axios from "axios";

const registerUrl = "https://transportes-villarreal.herokuapp.com/users/signup";
const API_url = "https://transportes-villarreal.herokuapp.com/users/login/";

const register = async (userData) => {
  const response = await axios.post(registerUrl, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//login
const login = async (userData) => {
  const response = await axios.post(API_url, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
};

export default authService;
