import { useMusic } from "../context/MusicContext";
import "../styles/musiccard.css";
const MusicCard = ({ music }) => {
  const { setCurrentSong } = useMusic();
  return (
    <div className="music-card">
      <div className="music-icon">🎵</div>

      <h2>{music.title}</h2>

      <p>{music.artist?.username}</p>

      <button className="play-btn" onClick={() => setCurrentSong(music)}>
        ▶ Play
      </button>
    </div>
  );
};

export default MusicCard;
