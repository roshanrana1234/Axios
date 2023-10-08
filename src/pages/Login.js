import React, { useState, useEffect } from "react";
import axios from "axios";
import { setToken } from "../AllTokens/AccessToken";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/Axios-utils";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    axiosInstance
      .post("http://localhost:8000/developer", data)
      .then((res) => {
        console.log(res);
        setToken("flsdjfldjklfasdkl;fjkl;fjffupfiouopdfuiopfusdiop");
        navigate("/crud");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-center text-xl font-bold my-4">Login Form</h1>
        <form
          onSubmit={handleSubmit}
          className="w-10/12 m-auto bg-gray-300 p-4 rounded flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
