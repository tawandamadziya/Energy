import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./lg.png";
import "C:/Users/Tawanda Madziya/Desktop/front-ended/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Make a POST request to the local server API endpoint
      const response = await axios.post("http://localhost:5001", {
        username,
        password,
      });

      // Handle successful login
      console.log("Login successful");
      console.log("API response:", response.data);
    } catch (error) {
      // Handle login error
      setError("Invalid username or password");
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand bg-body-tertiary bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">GRIP Energiemonitor</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link disabled">GRIP Energiemonitor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
        <br />
        <span>
          Don't have an account? <Link to="/huis">signup</Link> here
        </span>
      </div>
      {/* <div>
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
          <div class="row align-items-center">
            <div class="col-auto">
              <a href="#" class="user-avatar rounded bordered">
                <img
                  class="p-1 rounded"
                  alt="Image placeholder"
                  src="./assets/img/team/profile-picture-1.jpg"
                />
              </a>
            </div>
            <div class="col-auto px-0">
              <h4 class="fs-6 mb-0">Chris Wood</h4>
              <span class="small text-muted">Graphic Designer</span>
            </div>
            <div class="col text-end">
              <span class="fs-6 fw-bolder">$1,834</span>
            </div>
          </div>
        </li>
      </div> */}
    </div>
  );
};

export default LoginPage;
