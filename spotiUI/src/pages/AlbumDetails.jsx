import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useMusic } from "../context/MusicContext";
import "../styles/albumdetails.css";

const AlbumDetails = () => {
  const { albumId } = useParams();
  const { playSong } = useMusic();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7000/api/music/albums/${albumId}`,
        {
          withCredentials: true,
        }
      );

      setAlbum(res.data.album);
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

      <section className="album-page">

        <div className="album-banner">

          <div className="album-cover">
            🎵
          </div>

          <div className="album-info">

            <span className="album-type">Album</span>

            <h1>{album.title}</h1>

            <p>
              {album.artists?.[0]?.username}
            </p>

            <p>
              {album.musics?.length || 0} Songs
            </p>

            <button
              className="album-play-btn"
              onClick={() => playSong(album.musics[0])}
            >
              ▶ Play Album
            </button>

          </div>

        </div>

        <div className="song-table">

          <div className="song-header">

            <span>#</span>

            <span>Title</span>

            <span>Artist</span>

            <span></span>

          </div>

          {album.musics?.map((music, index) => (

            <div
              className="song-row"
              key={music._id}
            >

              <span>{index + 1}</span>

              <span>{music.title}</span>

              <span>{music.artist?.username}</span>

              <button
                onClick={() => playSong(music)}
              >
                ▶
              </button>

            </div>

          ))}

        </div>

      </section>
    </>
  );
};

export default AlbumDetails;