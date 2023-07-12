// import React, { useState } from "react";
// import css from "./App.css";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route } from 'react-router-dom';
// import logo from "./lg.png";


// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Make a POST request to the local server API endpoint
//       const response = await axios.post("http://localhost:5001", {
//         username,
//         password,
//       });

//       // Handle successful login
//       console.log("Login successful");
//       console.log("API response:", response.data);
//     } catch (error) {
//       // Handle login error
//       setError("Invalid username or password");
//       console.error("Login error:", error);
//     }
//   };

//   return (

//     <div>
  
//       <nav
//         class="navbar navbar-expand bg-body-tertiary bg-dark border-bottom border-bottom-dark"
//         data-bs-theme="dark"
//       >
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             <img className="logo" src={logo} alt="Logo" />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon">GRIP Energiemonitor</span>
//           </button>

//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a class="nav-link disabled">GRIP Energiemonitor</a>
//               </li>
//               {/* <li>
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Features
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Pricing
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//       <div className="container">
//         <form className="login-form" onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <br />
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <br />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <br />
//           <br />
//           {error && <div className="error">{error}</div>}
//           <button type="submit">Login</button>
//         </form>
//         <br />
//         <span>Dont have an account?<a href="#"> sign up</a> here</span>
//       </div>
      
//     </div>
//   );
// };

// export default LoginPage;


import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/huis';
import Login from './components/Login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="huis" element={<Home />} />
      </Routes>
    </div>
  );
}