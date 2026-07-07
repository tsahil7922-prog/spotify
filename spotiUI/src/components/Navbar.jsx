import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import axios from "axios";
const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:7000/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );

      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
