import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../components/AlbumCard";
import "../styles/Albums.css";
import Navbar from "../components/Navbar";
import musicService from "../services/musicService";
import { useQuery } from "@tanstack/react-query";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    const res = await musicService.getAllAlbums();
    return res?.data?.allAlbum;
    // setAlbums(res.data.allAlbum);
  };

  const {
    data: allAlbums,
    isPending,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });
  return (
    <>
      <Navbar />
      <section className="albums-page">
        <div className="albums-header">
          <h1>Albums</h1>
          <p>Browse albums from artists</p>
        </div>

        {isPending ? (
          <p>Loading albums...</p>
        ) : error ? (
          <p className="error-message">
            Failed to load albums. Please try again later.
          </p>
        ) : (
          <div className="albums-grid">
            {allAlbums?.map((album) => (
              <AlbumCard key={album._id} album={album} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Albums;
