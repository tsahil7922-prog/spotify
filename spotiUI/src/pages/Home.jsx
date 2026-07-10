import { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Loader from "../components/Loader";
import musicService  from "../services/musicService";
const Home = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);

 const getMusics = async () => {
  try {
    const res = await musicService.getAllMusic();
    setMusics(res?.data?.allMusics);
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
