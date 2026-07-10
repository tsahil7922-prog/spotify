import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import axios from "axios";
import authApi from "../api/authApi";
const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = async () => {
    await authApi.logout();
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <h2>🎵 Musicify</h2>

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
