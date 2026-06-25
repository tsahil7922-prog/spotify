import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  return (
    <nav className="navbar">
      <h2>🎵 Musicify</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/albums">
          Albums
        </Link>

        {user.role === "artist" && (
          <>
            <Link to="/upload">
              Upload
            </Link>

            <Link to="/create-album">
              Create Album
            </Link>
          </>
        )}

        <Link to="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;