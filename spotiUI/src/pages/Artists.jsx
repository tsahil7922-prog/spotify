import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ArtistCard from "../components/ArtistCard";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArtists = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/music/artists", {
        withCredentials: true,
      });

      setArtists(res?.data?.allArtist);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Artists Mounted");

    getArtists();

    return () => {
      console.log("Artists Unmounted");
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>Artists</h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="artist-grid">
            {artists?.map((artist) => (
              <ArtistCard key={artist._id} artist={artist} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Artists;
