import axios from "axios";

const API_url = "https://transportes-villarreal.herokuapp.com/users/login/";

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
  logout,
  login
};

export default authService;
