import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login_page1.jpg";
import "./SignIn.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });

      // Save token and user in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect to logged-in home
      navigate("/userhome");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>WELCOME BACK !</h2>
        <p>Please enter your details.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button className="sign-in-btn" type="submit">Login</button>

          <p className="signup-link">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-redirect">Sign up</Link>
          </p>
        </form>
      </div>

      <div className="image-section">
        <img src={loginImg} alt="Sign In Visual" />
      </div>
    </div>
  );
};

export default SignIn;



