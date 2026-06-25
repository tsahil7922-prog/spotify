import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const AlbumDetails = () => {
  const { albumId } = useParams();

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

      <section className="page-container">
        <h1>{album.title}</h1>

        <p>
          Artist :
          {album.artists?.[0]?.username}
        </p>

        <div className="music-grid">
          {album.musics?.map((music) => (
            <div key={music._id} className="music-card">
              <h3>{music.title}</h3>

              <audio controls>
                <source src={music.url} />
              </audio>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AlbumDetails;