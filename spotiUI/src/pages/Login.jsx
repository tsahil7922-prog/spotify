import axios from "axios";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/authService";
import useToast from "../hooks/useToast";
const Login = () => {
  const navigate = useNavigate();
  const { showToaster } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login(formData);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // window.location.href = "/home";
      navigate("/home");
      showToaster(res?.data?.message, "success");
      console.log(res?.data);
    } catch (err) {
      showToaster(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Login failed",
        "error",
      );
    }
  };

  return (
    <section className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
