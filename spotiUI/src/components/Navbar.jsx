import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import authApi from "../api/authApi";
import { useEffect, useMemo, useState } from "react";
import musicService from "../services/musicService";
import useToast from "../hooks/useToast";
import useDebounce from "../hooks/useDebounce";
import Search from "./Search";

const Navbar = () => {
  const { showToaster } = useToast();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = async () => {
    await authApi.logout();
    localStorage.removeItem("user");
    navigate("/");
  };

  // Search API
  // const handleSubmit = async (value) => {
  //   try {
  //     const res = await musicService.searchMusic(value);
  //     console.log(res.data);
  //     showToaster(res?.data?.message || "Search Success");
  //   } catch (err) {
  //     showToaster(
  //       err?.response?.data?.error ||
  //         err?.response?.data?.message ||
  //         "Search Failed",
  //       "error",
  //     );
  //   }
  // };

  // Generic Debounce Function
  // const debounce = (fn, delay) => {
  //   let timer;

  //   return (...args) => {
  //     clearTimeout(timer);

  //     timer = setTimeout(() => {
  //       fn(...args);
  //     }, delay);
  //   };
  // };

  // Create debounce only once
  // const betterFunction = useMemo(() => debounce(handleSubmit, 1000), []);

  // useEffect(() => {
  //   if (!search.trim()) return;

  //   betterFunction(search);
  // }, [search]);

  return (
    <nav className="navbar">
      <h2>🎵 Musicify</h2>

      <Search />

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/artists">Artists</Link>

        {user.role === "artist" && (
          <>
            <Link to="/upload">Upload</Link>
            <Link to="/create-album">Create Album</Link>
          </>
        )}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
