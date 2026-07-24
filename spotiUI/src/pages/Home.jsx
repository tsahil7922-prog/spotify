import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import Loader from "../components/Loader";
import musicService from "../services/musicService";
import { useQuery } from "@tanstack/react-query";
import { useMusic } from "../context/MusicContext";

const Home = () => {
  const { search, searchResults } = useMusic();

  const getMusics = async () => {
    const res = await musicService.getAllMusic();
    return res?.data?.allMusics;
  };

  const {
    data: allMusics = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["musics"],
    queryFn: getMusics,
  });

  const isSearching = search.trim().length > 0;

  const displaySongs = isSearching ? searchResults : allMusics;

  return (
    <>
      <Navbar />

      <section className="page-container">
        <h1>{isSearching ? "Search Results" : "Trending Music"}</h1>

        {isPending ? (
          <Loader />
        ) : error ? (
          <div className="error-message">
            <h2>Failed to load music</h2>
            <p>Please try again later.</p>
          </div>
        ) : !isSearching && allMusics.length === 0 ? (
          <div className="empty-message">
            <h2>No music uploaded yet 🎵</h2>
            <p>Upload your first song to get started.</p>
          </div>
        ) : isSearching && searchResults.length === 0 ? (
          <div className="empty-message">
            <h2>No results found</h2>
            <p>No songs matched "{search}"</p>
          </div>
        ) : (
          <div className="music-grid">
            {displaySongs.map((music) => (
              <MusicCard
                key={music._id}
                music={music}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;