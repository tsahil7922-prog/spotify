import { Link } from "react-router-dom";
import "../styles/artistcard.css";

const ArtistCard = ({ artist }) => {
  return (
    <Link
      to={`/artists/${artist._id}`}
      className="artist-card"
    >
      <div className="artist-left">
        <div className="artist-avatar">
          🎤
        </div>

        <div className="artist-info">
          <h2>{artist.username}</h2>

          <p>Artist</p>

          <div className="artist-email">
            {artist.email}
          </div>
        </div>
      </div>

      <div className="artist-right">
        <button className="artist-play">
          ▶
        </button>
      </div>
    </Link>
  );
};

export default ArtistCard;