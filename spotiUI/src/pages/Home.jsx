import { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Loader from "../components/Loader";
const Home = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMusics = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/music", {
        withCredentials: true,
      });

      setMusics(res.data.allMusics);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>Trending Music</h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="music-grid">
            {musics.map((music) => (
              <MusicCard key={music._id} music={music} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
