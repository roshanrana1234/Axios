import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Crud from "./pages/Crud";
import Login from "./pages/Login";
import DeveloperDetail from "./pages/DeveloperDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="crud" element={<Crud />} />
        <Route path="crud/:devID" element={<DeveloperDetail />} />
      </Routes>
    </>
  );
};

export default App;

// import React from "react";

// const App = () => {
//   const key = process.env.REACT_APP_BASE_URL;
//   const handleToken = () => {
//     localStorage.setItem("token", "jfljfljdlfjfjjfkjafjljfljlfjljfljljf");
//   };
//   const removToken = () => {
//     localStorage.removeItem("token");
//   };
//   console.log(localStorage.getItem("token"));
//   return (
//     <>
//       <div className="p-4">
//         <div> Hello World! </div>
//         <button className="btn" onClick={handleToken}>
//           SetToken
//         </button>
//         <button className="btn" onClick={removToken}>
//           RemovToken
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;
