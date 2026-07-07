import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import MusicCard from "../components/MusicCard";

const ArtistProfile = () => {
  const { artistId } = useParams();

  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7000/api/music/artists/${artistId}`,
        {
          withCredentials: true,
        }
      );

      setArtist(res?.data?.artist);

      setSongs(res?.data?.songs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <section className="page-container">
        <div className="artist-header">
          <div className="artist-image">
            🎤
          </div>

          <div>
            <h1>{artist.username}</h1>

            <p>{artist.email}</p>

            <h4>{songs.length} Songs</h4>
          </div>
        </div>

        <div className="music-grid">
          {songs.map((song) => (
            <MusicCard
              key={song._id}
              music={song}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ArtistProfile;