import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
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
        "http://localhost:7000/api/auth/register",
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      window.location.href = "/";
    } catch (err) {
      console.log(err);
      
      alert("Registration Failed");
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
      </form>
    </section>
  );
};

export default Register;
