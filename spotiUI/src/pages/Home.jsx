import { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Loader from "../components/Loader";
import musicService from "../services/musicService";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const [musics, setMusics] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getMusics = async () => {
    const res = await musicService.getAllMusic();
    return res?.data?.allMusics;
  };

  const {
    data: allMusics,
    isPending,
    error,
  } = useQuery({
    queryKey: ["musics"],
    queryFn: getMusics,
  });

  // useEffect(() => {
  //   getMusics();
  // }, []);

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>Trending Music</h1>

        {isPending ? (
          <Loader />
        ) : error ? (
          <div className="error-message">
            <p>Failed to load music. Please try again later.{error.message}</p>
          </div>
        ) : (
          <div className="music-grid">
            {allMusics?.map((music) => (
              <MusicCard key={music._id} music={music} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
