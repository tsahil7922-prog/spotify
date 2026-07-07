import axios from "axios";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = () => {
  const navigate = useNavigate();
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
      const res = await axios.post(
        "http://localhost:7000/api/auth/login",
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      // window.location.href = "/home";
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Login Failed");
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
