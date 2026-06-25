import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/albums/${album._id}`}>
      <div className="album-card">
        <div className="album-cover">💿</div>

        <h3>{album.title || "Untitled Album"}</h3>

        <p>
          Artist :
          {album.artists?.length > 0
            ? album.artists[0].username
            : "Unknown Artist"}
        </p>

        <span>{album.musics?.length || 0} Songs</span>
      </div>
    </Link>
  );
};

export default AlbumCard;
