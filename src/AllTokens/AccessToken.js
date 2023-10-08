const setToken = (value) => {
  localStorage.setItem("token", value);
};

const getToken = (key) => {
  localStorage.getItem(key);
};

const removeToken = (key) => {
  localStorage.removeItem(key);
};

export { setToken, getToken, removeToken };
