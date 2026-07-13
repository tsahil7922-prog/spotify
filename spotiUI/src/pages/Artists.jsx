import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ArtistCard from "../components/ArtistCard";
import { useQuery } from "@tanstack/react-query";
const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArtists = async () => {
    const res = await axios.get("http://localhost:7000/api/music/artists", {
      withCredentials: true,
    });

    return res.data.allArtist;
  };
  const {
    data: allArtist,
    isPending,
    error,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
  });

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>Artists</h1>

        {isPending ? (
          <Loader />
        ) : error ? (
          <div className="error-message">
            <p>
              Failed to load artists. Please try again later.{error.message}
            </p>
          </div>
        ) : (
          <div className="artist-grid">
            {allArtist?.map((artist) => (
              <ArtistCard key={artist._id} artist={artist} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Artists;
