import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="h-[10vh] bg-gray-600 text-white p-4 flex justify-between items-center font-semibold">
        <span>
          <img
            className="h-[4vh]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/2560px-Axios_logo_%282020%29.svg.png"
            alt=""
          />
        </span>
        <ul className="flex items-center gap-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="crud">
            <li>Crud</li>
          </Link>
          <Link className="btn" to="login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
