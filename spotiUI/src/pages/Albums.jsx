import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../components/AlbumCard";
import "../styles/Albums.css";
import Navbar from "../components/Navbar";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/music/albums", {
        withCredentials: true,
      });

      setAlbums(res.data.allAlbum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {" "}
      <Navbar />
      <section className="albums-page">
        <div className="albums-header">
          <h1>Albums</h1>
          <p>Browse albums from artists</p>
        </div>

        <div className="albums-grid">
          {albums.map((album) => (
            <AlbumCard key={album._id} album={album} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Albums;
