import axios from "axios";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/authService";
import useToast from "../hooks/useToast";
const Register = () => {
  const { showToaster } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authService.register(formData);
      showToaster(res?.data?.message, "success");

      console.log(res.data);
      navigate("/");
    } catch (err) {
      showToaster(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Registartion failed",
        "error",
      );
    }
  };

  return (
    <section className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="artist">Artist</option>
        </select>

        <button type="submit">Register</button>

        <p className="auth-switch">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
